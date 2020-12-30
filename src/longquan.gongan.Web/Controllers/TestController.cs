// -----------------------------------------------------------------------
//  <copyright file="TestController.cs" company="OSharp开源团队">
//      Copyright (c) 2014-2018 OSharp. All rights reserved.
//  </copyright>
//  <site>http://www.osharp.org</site>
//  <last-editor>郭明锋</last-editor>
//  <last-date>2018-06-27 4:50</last-date>
// -----------------------------------------------------------------------

using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;
using System.Timers;
using longquan.gongan.BaseData;
using longquan.gongan.Identity;
using longquan.gongan.Identity.Dtos;
using longquan.gongan.Identity.Entities;
using longquan.gongan.InStor;
using longquan.gongan.InStor.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

using OSharp.AspNetCore;
using OSharp.AspNetCore.Mvc.Filters;
using OSharp.Collections;
using OSharp.Data;


namespace longquan.gongan.Web.Controllers
{
    public class Notice
    {
        public string id { get; set; }
        public string avatar { get; set; }
        public string title { get; set; }
        public DateTime datetime { get; set; }
        public string type { get; set; }
        public string description { get; set; }
        public bool read { get; set; }
        public string extra { get; set; }
        public string status { get; set; }
    }

    public class ExpiredMatHub : Hub
    {
        private readonly ExpiredMatService _expiredMat;

        public ExpiredMatHub(ExpiredMatService expiredMat)
        {
            _expiredMat = expiredMat;
        }
        public List<Notice> GetExpiredMatsAsync()
        {
            return _expiredMat.GetExpiredStorContracts();
        }
        public int GetExpiredMatCountAsync()
        {
            return _expiredMat.GetExpiredMatCount();
        }

    }
    public class ExpiredMatService
    {
        /// <summary>
        /// 获取或设置 模块业务契约对象
        /// </summary>
        protected IInStorContract InStorContract { get; }
        /// <summary>
        /// 获取或设置 模块业务契约对象
        /// </summary>
        protected IBaseDataContract BaseDataContract { get; }

        public ExpiredMatService(IInStorContract inStorContract, IBaseDataContract baseDataContract)
        {
            InStorContract = inStorContract;
            BaseDataContract = baseDataContract;
        }

        public int GetExpiredMatCount()
        {
            return GetExpiredStorContracts().Count;
        }
        public List<Notice> GetExpiredStorContracts()
        {

            return InStorContract.InStorMats.
                Where(s => s.WarrantyPeriod < DateTime.Now).
                GroupJoin(
                BaseDataContract.BaseMats,
                InStor => InStor.MatNo,
                Mat => Mat.No,
                (x, y) => new { InStorMats = x, Mats = y }).SelectMany(x => x.Mats.DefaultIfEmpty(),
                (t, v) => new Notice
                {
                    id = t.InStorMats.MatNo,
                    avatar = "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
                    title = $"物料：'{v.Name}'已过期，请及时处理！",
                    datetime = t.InStorMats.WarrantyPeriod,
                    type = "通知"
                }).ToList();
        }
    }


    [Description("网站-测试")]
    [ClassFilter]
    public class TestController : SiteApiController
    {
        private readonly IHubContext<ExpiredMatHub> _countHub;
        private readonly UserManager<User> _userManager;
        private readonly IIdentityContract _identityContract;

        public TestController(UserManager<User> userManager, IIdentityContract identityContract, IHubContext<ExpiredMatHub> countHub)
        {
            _userManager = userManager;
            _identityContract = identityContract;
            _countHub = countHub;
        }


        [HttpGet]
        [UnitOfWork]
        [MethodFilter]
        [Description("测试01")]
        public async Task<string> Test01()
        {
            List<object> list = new List<object>();

            if (!_userManager.Users.Any())
            {
                RegisterDto dto = new RegisterDto
                {
                    UserName = "admin",
                    Password = "osharp123456",
                    ConfirmPassword = "osharp123456",
                    Email = "i66soft@qq.com",
                    NickName = "大站长",
                    RegisterIp = HttpContext.GetClientIp()
                };

                OperationResult<User> result = await _identityContract.Register(dto);
                if (result.Succeeded)
                {
                    User user = result.Data;
                    user.EmailConfirmed = true;
                    await _userManager.UpdateAsync(user);
                }
                list.Add(result.Message);

                dto = new RegisterDto()
                {
                    UserName = "osharp",
                    Password = "osharp123456",
                    Email = "mf.guo@qq.com",
                    NickName = "测试号",
                    RegisterIp = HttpContext.GetClientIp()
                };
                result = await _identityContract.Register(dto);
                if (result.Succeeded)
                {
                    User user = result.Data;
                    user.EmailConfirmed = true;
                    await _userManager.UpdateAsync(user);
                }
                list.Add(result.Message);
            }

            return list.ExpandAndToString("\r\n");
        }
        [HttpPost]
        public async Task<string> count()
        {
            await _countHub.Clients.All.SendAsync("someFunc", new { random = "abcd" });
            HttpContext.Response.Headers.Add("Access-Control-Allow-Credentials", "true");
            return "1";
        }


    }


    public class ClassFilter : ActionFilterAttribute, IExceptionFilter
    {
        private ILogger _logger;

        /// <inheritdoc />
        public override void OnActionExecuting(ActionExecutingContext context)
        {
            _logger = context.HttpContext.RequestServices.GetLogger<ClassFilter>();
            _logger.LogInformation("ClassFilter - OnActionExecuting");
        }

        /// <inheritdoc />
        public override void OnActionExecuted(ActionExecutedContext context)
        {
            _logger.LogInformation("ClassFilter - OnActionExecuted");
        }

        /// <inheritdoc />
        public override void OnResultExecuting(ResultExecutingContext context)
        {
            _logger.LogInformation("ClassFilter - OnResultExecuting");
        }

        /// <inheritdoc />
        public override void OnResultExecuted(ResultExecutedContext context)
        {
            _logger.LogInformation("ClassFilter - OnResultExecuted");
        }

        /// <summary>
        /// Called after an action has thrown an <see cref="T:System.Exception" />.
        /// </summary>
        /// <param name="context">The <see cref="T:Microsoft.AspNetCore.Mvc.Filters.ExceptionContext" />.</param>
        public void OnException(ExceptionContext context)
        {
            var ex = context.Exception.Message;
            _logger.LogInformation("ClassFilter - OnException");
        }
    }

    public class MethodFilter : ActionFilterAttribute
    {
        private ILogger _logger;

        /// <inheritdoc />
        public override void OnActionExecuting(ActionExecutingContext context)
        {
            _logger = context.HttpContext.RequestServices.GetLogger<MethodFilter>();
            _logger.LogInformation("MethodFilter - OnActionExecuting");
        }

        /// <inheritdoc />
        public override void OnActionExecuted(ActionExecutedContext context)
        {
            _logger.LogInformation("MethodFilter - OnActionExecuted");
        }

        /// <inheritdoc />
        public override void OnResultExecuting(ResultExecutingContext context)
        {
            _logger.LogInformation("MethodFilter - OnResultExecuting");
        }

        /// <inheritdoc />
        public override void OnResultExecuted(ResultExecutedContext context)
        {
            _logger.LogInformation("MethodFilter - OnResultExecuted");
        }

    }
}