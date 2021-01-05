// -----------------------------------------------------------------------
//  <copyright file="DashboardController.cs" company="OSharp开源团队">
//      Copyright (c) 2014-2018 OSharp. All rights reserved.
//  </copyright>
//  <site>http://www.osharp.org</site>
//  <last-editor></last-editor>
//  <last-date>2018-07-26 16:07</last-date>
// -----------------------------------------------------------------------

using System;
using System.ComponentModel;
using System.Data;
using System.Linq;
using System.Linq.Expressions;

using longquan.gongan.Authorization;
using longquan.gongan.Common;
using longquan.gongan.Identity.Entities;

using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

using OSharp.AspNetCore.Mvc;
using OSharp.Authorization;
using OSharp.Authorization.Functions;
using OSharp.Authorization.Modules;
using OSharp.Caching;
using OSharp.Entity;


namespace longquan.gongan.Web.Areas.Admin.Controllers
{
    [ModuleInfo(Order = 1)]
    [Description("管理-信息汇总")]
    public class DashboardController : AdminApiController
    {
        private readonly UserManager<User> _userManager;
        private readonly RoleManager<Role> _roleManager;
        private readonly FunctionAuthManager _functionAuthorizationManager;
        private readonly DataAuthManager _dataAuthorizationManager;
        private readonly ICacheService _cacheService;

        private SqlHelper sq = new SqlHelper();
        private string ConnectionString = "Server=.\\SQLZHONG;Database=gongan;User ID=sa;Password=TengKun777;MultipleActiveResultSets=true";
        /// <summary>
        /// 初始化一个<see cref="DashboardController"/>类型的新实例
        /// </summary>
        public DashboardController(UserManager<User> userManager,
            RoleManager<Role> roleManager,
            FunctionAuthManager functionAuthorizationManager,
            DataAuthManager dataAuthorizationManager,
            ICacheService cacheService)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _functionAuthorizationManager = functionAuthorizationManager;
            _dataAuthorizationManager = dataAuthorizationManager;
            _cacheService = cacheService;
        }

        /// <summary>
        /// 获取统计数据
        /// </summary>
        /// <param name="start">起始时间</param>
        /// <param name="end">结束时间</param>
        /// <returns>统计数据</returns>
        [HttpGet]
        [ModuleInfo]
        [LoggedIn]
        [Description("统计数据")]
        public IActionResult SummaryData(DateTime start, DateTime end)
        {
            IFunction function = this.GetExecuteFunction();
            Expression<Func<User, bool>> userExp = GetExpression<User>(start, end);

            var users = _cacheService.ToCacheList(_userManager.Users.Where(userExp).GroupBy(m => 1).Select(g => new
            {
                TotalCount = g.Sum(n => 1),
                ValidCount = g.Sum(n => n.EmailConfirmed ? 1 : 0)
            }),
                function,
                "Dashboard_Summary_User",
                start,
                end).FirstOrDefault() ?? new { TotalCount = 0, ValidCount = 0 };
            var roles = _cacheService.ToCacheList(_roleManager.Roles.GroupBy(m => 1).Select(g => new
            {
                TotalCount = g.Sum(n => 1),
                AdminCount = g.Sum(n => n.IsAdmin ? 1 : 0)
            }),
                function,
                "Dashboard_Summary_Role",
                start,
                end).FirstOrDefault() ?? new { TotalCount = 0, AdminCount = 0 };
            var modules = _cacheService.ToCacheList(_functionAuthorizationManager.Modules.GroupBy(m => 1).Select(g => new
            {
                TotalCount = g.Sum(n => 1),
                SiteCount = g.Sum(n => n.TreePathString.Contains("$2$") ? 1 : 0),
                AdminCount = g.Sum(m => m.TreePathString.Contains("$3$") ? 1 : 0)
            }),
                function,
                "Dashboard_Summary_Module").FirstOrDefault() ?? new { TotalCount = 0, SiteCount = 0, AdminCount = 0 };
            var functions = _cacheService.ToCacheList(_functionAuthorizationManager.Functions.GroupBy(m => m.Id).Select(g => new
            {
                TotalCount = g.Sum(n => 1),
                ControllerCount = g.Sum(m => m.IsController ? 1 : 0)
            }),
                function,
                "Dashboard_Summary_Function").FirstOrDefault() ?? new { TotalCount = 0, ControllerCount = 0 };
            var entityInfos = _cacheService.ToCacheList(_dataAuthorizationManager.EntityInfos.GroupBy(m => m.Id).Select(g => new
            {
                TotalCount = g.Sum(n => 1),
                AuditCount = g.Sum(m => m.AuditEnabled ? 1 : 0)
            }),
                function,
                "Dashboard_Summary_EntityInfo").FirstOrDefault() ?? new { TotalCount = 0, AuditCount = 0 };

            var data = new { users, roles, modules, functions, entityInfos };
            return Json(data);
        }

        [HttpGet]
        [ModuleInfo]
        [LoggedIn]
        [Description("曲线数据")]
        public IActionResult LineData(DateTime start, DateTime end)
        {
            IFunction function = this.GetExecuteFunction();
            Expression<Func<User, bool>> userExp = GetExpression<User>(start, end);

            var userData = _cacheService.ToCacheList(_userManager.Users.Where(userExp).GroupBy(m => m.CreatedTime.Date).Select(g => new
            {
                Date = g.Key,
                DailyCount = g.Count()
            }),
                function,
                "Dashboard_Line_User",
                start,
                end);
            var users = userData.Select(m => new
            {
                Date = m.Date.ToString("d"),
                m.DailyCount,
                DailySum = userData.Where(n => n.Date <= m.Date).Sum(n => n.DailyCount)
            }).ToList();

            return Json(users);
        }

        private static Expression<Func<TEntity, bool>> GetExpression<TEntity>(DateTime start, DateTime end)
            where TEntity : class, ICreatedTime
        {
            if (start > end)
            {
                throw new ArgumentException($"结束时间{end}不能小于开始时间{start}");
            }
            return m => m.CreatedTime.Date >= start.Date && m.CreatedTime.Date <= end.Date;
        }

        //各部门领用情况
        public IActionResult ReportSeld(DateTime start, DateTime end)
        {
            //各部门专用设备使用数量情况
            string sql001 = @"SELECT Userdepartment,sum(CurrNum) as SumNum FROM [gongan].[dbo].[InStor_InStorMat]  where BigType='专用设备' and Usage='在用' group by Userdepartment,CurrNum";

            DataTable  dt001= sq.Select_DateSet_Sqlserver(ConnectionString, sql001).Tables[0];


            //各部门专用设备使用金额情况
            string sql003 = @"SELECT Userdepartment,sum(CurrNum*InPrice) as SumNum FROM [gongan].[dbo].[InStor_InStorMat]  where BigType='专用设备' and Usage='在用' group by Userdepartment,CurrNum";

            DataTable dt003= sq.Select_DateSet_Sqlserver(ConnectionString, sql003).Tables[0];

            //各部门专用设备报废数量情况
            string sql002 = @"SELECT Userdepartment,sum(CurrNum) as SumNum FROM [gongan].[dbo].[InStor_InStorMat]  where BigType='专用设备' and Usage='报废' group by Userdepartment,CurrNum";

            DataTable dt002 = sq.Select_DateSet_Sqlserver(ConnectionString, sql002).Tables[0];


            //各部门专用设备报废金额情况
            string sql004 = @"SELECT Userdepartment,sum(CurrNum*InPrice) as SumNum FROM [gongan].[dbo].[InStor_InStorMat]  where BigType='专用设备' and Usage='报废' group by Userdepartment,CurrNum";

            DataTable dt004 = sq.Select_DateSet_Sqlserver(ConnectionString, sql004).Tables[0];




            //专用设备采购费用统计
            string sql005 = @"select convert(varchar,sum(currnum*InPrice)) from InStor_InStorMat ";

            string str001 = sq.Select_Str_Sqlserver(ConnectionString, sql005);

            var infos = new
            {
                dt001,
                dt002,
                dt003,
                dt004,
                str001,
            };
           return Json(infos);
        }
    }
}