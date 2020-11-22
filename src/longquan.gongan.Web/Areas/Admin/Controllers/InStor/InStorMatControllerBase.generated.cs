// -----------------------------------------------------------------------
// <auto-generated>
//    此代码由代码生成器生成。
//    手动更改此文件可能导致应用程序出现意外的行为。
//    如果重新生成代码，对此文件的任何修改都会丢失。
//    如果需要扩展此类，可以遵守如下规则进行扩展：
//      1.横向扩展：如需给当前控制器添加API，请在控制器类型 InStorMatController.cs 进行添加
//      2.纵向扩展：如需要重写当前控制器的API实现，请在控制器类型 InStorMatController.cs 进行继承重写
// </auto-generated>
//
//  <copyright file="InStorMatBase.generated.cs" company="longquan.gongan">
//      longquan.gongan
//  </copyright>
//  <site>http://longquan.gongan</site>
//  <last-editor>longquan.gongan</last-editor>
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
using OSharp.Authorization.Functions;
using OSharp.Authorization.Modules;
using OSharp.Data;
using OSharp.Entity;
using OSharp.Filter;
using OSharp.Security;

using longquan.gongan.InStor;
using longquan.gongan.InStor.Dtos;
using longquan.gongan.InStor.Entities;


namespace longquan.gongan.Web.Areas.Admin.Controllers
{
    /// <summary>
    /// 管理控制器基类: 资产入库信息
    /// </summary>
    [ModuleInfo(Position = "InStor", PositionName = "模块")]
    [Description("管理-资产入库信息")]
    public abstract class InStorMatControllerBase : AdminApiController
    {
        /// <summary>
        /// 初始化一个<see cref="InStorMatController"/>类型的新实例
        /// </summary>
        protected InStorMatControllerBase(IInStorContract inStorContract,
            IFilterService filterService)
        {
            InStorContract = inStorContract;
            FilterService = filterService;
        }

        /// <summary>
        /// 获取或设置 数据过滤服务对象
        /// </summary>
        protected IFilterService FilterService { get; }

        /// <summary>
        /// 获取或设置 模块业务契约对象
        /// </summary>
        protected IInStorContract InStorContract { get; }
        
        /// <summary>
        /// 读取资产入库列表信息
        /// </summary>
        /// <param name="request">页请求信息</param>
        /// <returns>资产入库列表分页信息</returns>
        [HttpPost]
        [ModuleInfo]
        [Description("读取")]
        public virtual PageData<InStorMatOutputDto> Read(PageRequest request)
        {
            Check.NotNull(request, nameof(request));

            Expression<Func<InStorMat, bool>> predicate = FilterService.GetExpression<InStorMat>(request.FilterGroup);
            var page = InStorContract.InStorMats.ToPage<InStorMat, InStorMatOutputDto>(predicate, request.PageCondition);

            return page.ToPageData();
        }
        
        /// <summary>
        /// 新增资产入库信息
        /// </summary>
        /// <param name="dtos">资产入库信息输入DTO</param>
        /// <returns>JSON操作结果</returns>
        [HttpPost]
        [ModuleInfo]
        [DependOnFunction("Read")]
        [ServiceFilter(typeof(UnitOfWorkAttribute))]
        [Description("新增")]
        public virtual async Task<AjaxResult> Create(InStorMatInputDto[] dtos)
        {
            Check.NotNull(dtos, nameof(dtos));
            OperationResult result = await InStorContract.CreateInStorMats(dtos);
            return result.ToAjaxResult();
        }
        
        /// <summary>
        /// 更新资产入库信息
        /// </summary>
        /// <param name="dtos">资产入库信息输入DTO</param>
        /// <returns>JSON操作结果</returns>
        [HttpPost]
        [ModuleInfo]
        [DependOnFunction("Read")]
        [ServiceFilter(typeof(UnitOfWorkAttribute))]
        [Description("更新")]
        public virtual async Task<AjaxResult> Update(InStorMatInputDto[] dtos)
        {
            Check.NotNull(dtos, nameof(dtos));
            OperationResult result = await InStorContract.UpdateInStorMats(dtos);
            return result.ToAjaxResult();
        }
        
        /// <summary>
        /// 删除资产入库信息
        /// </summary>
        /// <param name="ids">资产入库信息编号</param>
        /// <returns>JSON操作结果</returns>
        [HttpPost]
        [ModuleInfo]
        [DependOnFunction("Read")]
        [ServiceFilter(typeof(UnitOfWorkAttribute))]
        [Description("删除")]
        public virtual async Task<AjaxResult> Delete(int[] ids)
        {
            Check.NotNull(ids, nameof(ids));
            OperationResult result = await InStorContract.DeleteInStorMats(ids);
            return result.ToAjaxResult();
        }
    }
}