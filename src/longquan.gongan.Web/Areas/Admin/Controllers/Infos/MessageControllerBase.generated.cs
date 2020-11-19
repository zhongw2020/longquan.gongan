// -----------------------------------------------------------------------
// <auto-generated>
//    此代码由代码生成器生成。
//    手动更改此文件可能导致应用程序出现意外的行为。
//    如果重新生成代码，对此文件的任何修改都会丢失。
//    如果需要扩展此类，可以遵守如下规则进行扩展：
//      1.横向扩展：如需给当前控制器添加API，请在控制器类型 MessageController.cs 进行添加
//      2.纵向扩展：如需要重写当前控制器的API实现，请在控制器类型 MessageController.cs 进行继承重写
// </auto-generated>
//
//  <copyright file="MessageBase.generated.cs" company="OSharp开源团队">
//      Copyright (c) 2014-2019 Liuliu. All rights reserved.
//  </copyright>
//  <site>https://www.osharp.org</site>
//  <last-editor>郭明锋</last-editor>
// -----------------------------------------------------------------------

using System;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Mvc;

using OSharp.AspNetCore.Mvc;
using OSharp.AspNetCore.Mvc.Filters;
using OSharp.AspNetCore.UI;
using OSharp.Caching;
using OSharp.Data;
using OSharp.Entity;
using OSharp.Filter;
using OSharp.Security;

using longquan.gongan.Infos;
using longquan.gongan.Infos.Dtos;
using longquan.gongan.Infos.Entities;

using OSharp.Authorization.Modules;


namespace longquan.gongan.Web.Areas.Admin.Controllers
{
    /// <summary>
    /// 管理控制器基类: 站内信信息
    /// </summary>
    [ModuleInfo(Position = "Infos", PositionName = "信息模块")]
    [Description("管理-站内信信息")]
    public abstract class MessageControllerBase : AdminApiController
    {
        /// <summary>
        /// 初始化一个<see cref="MessageController"/>类型的新实例
        /// </summary>
        protected MessageControllerBase(IInfosContract infosContract,
            IFilterService filterService)
        {
            InfosContract = infosContract;
            FilterService = filterService;
        }

        /// <summary>
        /// 获取或设置 数据过滤服务对象
        /// </summary>
        protected IFilterService FilterService { get; }

        /// <summary>
        /// 获取或设置 信息模块业务契约对象
        /// </summary>
        protected IInfosContract InfosContract { get; }
        
        /// <summary>
        /// 读取站内信列表信息
        /// </summary>
        /// <param name="request">页请求信息</param>
        /// <returns>站内信列表分页信息</returns>
        [HttpPost]
        [ModuleInfo]
        [Description("读取")]
        public virtual PageData<MessageOutputDto> Read(PageRequest request)
        {
            Check.NotNull(request, nameof(request));

            Expression<Func<Message, bool>> predicate = FilterService.GetExpression<Message>(request.FilterGroup);
            var page = InfosContract.Messages.ToPage<Message, MessageOutputDto>(predicate, request.PageCondition);

            return page.ToPageData();
        }
        
        /// <summary>
        /// 新增站内信信息
        /// </summary>
        /// <param name="dtos">站内信信息输入DTO</param>
        /// <returns>JSON操作结果</returns>
        [HttpPost]
        [ModuleInfo]
        [DependOnFunction("Read")]
        [ServiceFilter(typeof(UnitOfWorkAttribute))]
        [Description("新增")]
        public virtual async Task<AjaxResult> Create(MessageInputDto[] dtos)
        {
            Check.NotNull(dtos, nameof(dtos));
            OperationResult result = await InfosContract.CreateMessages(dtos);
            return result.ToAjaxResult();
        }
        
        /// <summary>
        /// 更新站内信信息
        /// </summary>
        /// <param name="dtos">站内信信息输入DTO</param>
        /// <returns>JSON操作结果</returns>
        [HttpPost]
        [ModuleInfo]
        [DependOnFunction("Read")]
        [ServiceFilter(typeof(UnitOfWorkAttribute))]
        [Description("更新")]
        public virtual async Task<AjaxResult> Update(MessageInputDto[] dtos)
        {
            Check.NotNull(dtos, nameof(dtos));
            OperationResult result = await InfosContract.UpdateMessages(dtos);
            return result.ToAjaxResult();
        }
        
        /// <summary>
        /// 删除站内信信息
        /// </summary>
        /// <param name="ids">站内信信息编号</param>
        /// <returns>JSON操作结果</returns>
        [HttpPost]
        [ModuleInfo]
        [DependOnFunction("Read")]
        [ServiceFilter(typeof(UnitOfWorkAttribute))]
        [Description("删除")]
        public virtual async Task<AjaxResult> Delete(Guid[] ids)
        {
            Check.NotNull(ids, nameof(ids));
            OperationResult result = await InfosContract.DeleteMessages(ids);
            return result.ToAjaxResult();
        }
    }
}
