// -----------------------------------------------------------------------
// <auto-generated>
//    此代码由代码生成器生成。
//    手动更改此文件可能导致应用程序出现意外的行为。
//    如果重新生成代码，对此文件的任何修改都会丢失。
//    如果需要扩展此类，可以遵守如下规则进行扩展：
//      1.横向扩展：如需给当前控制器添加API，请在控制器类型 BaseMatController.cs 进行添加
//      2.纵向扩展：如需要重写当前控制器的API实现，请在控制器类型 BaseMatController.cs 进行继承重写
// </auto-generated>
//
//  <copyright file="BaseMatBase.generated.cs" company="longquan.gongan">
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

using longquan.gongan.BaseData;
using longquan.gongan.BaseData.Dtos;
using longquan.gongan.BaseData.Entities;


namespace longquan.gongan.Web.Areas.Admin.Controllers
{
    /// <summary>
    /// 管理控制器基类: 物品数据信息
    /// </summary>
    [ModuleInfo(Position = "BaseData", PositionName = "基础数据模块")]
    [Description("管理-物品数据信息")]
    public abstract class BaseMatControllerBase : AdminApiController
    {
        /// <summary>
        /// 初始化一个<see cref="BaseMatController"/>类型的新实例
        /// </summary>
        protected BaseMatControllerBase(IBaseDataContract baseDataContract,
            IFilterService filterService)
        {
            BaseDataContract = baseDataContract;
            FilterService = filterService;
        }

        /// <summary>
        /// 获取或设置 数据过滤服务对象
        /// </summary>
        protected IFilterService FilterService { get; }

        /// <summary>
        /// 获取或设置 基础数据模块业务契约对象
        /// </summary>
        protected IBaseDataContract BaseDataContract { get; }
        
        /// <summary>
        /// 读取物品数据列表信息
        /// </summary>
        /// <param name="request">页请求信息</param>
        /// <returns>物品数据列表分页信息</returns>
        [HttpPost]
        [ModuleInfo]
        [Description("读取")]
        public virtual PageData<BaseMatOutputDto> Read(PageRequest request)
        {
            Check.NotNull(request, nameof(request));

            Expression<Func<BaseMat, bool>> predicate = FilterService.GetExpression<BaseMat>(request.FilterGroup);
            var page = BaseDataContract.BaseMats.ToPage<BaseMat, BaseMatOutputDto>(predicate, request.PageCondition);

            return page.ToPageData();
        }
        
        /// <summary>
        /// 新增物品数据信息
        /// </summary>
        /// <param name="dtos">物品数据信息输入DTO</param>
        /// <returns>JSON操作结果</returns>
        [HttpPost]
        [ModuleInfo]
        [DependOnFunction("Read")]
        [ServiceFilter(typeof(UnitOfWorkAttribute))]
        [Description("新增")]
        public virtual async Task<AjaxResult> Create(BaseMatInputDto[] dtos)
        {
            Check.NotNull(dtos, nameof(dtos));
            OperationResult result = await BaseDataContract.CreateBaseMats(dtos);
            return result.ToAjaxResult();
        }
        
        /// <summary>
        /// 更新物品数据信息
        /// </summary>
        /// <param name="dtos">物品数据信息输入DTO</param>
        /// <returns>JSON操作结果</returns>
        [HttpPost]
        [ModuleInfo]
        [DependOnFunction("Read")]
        [ServiceFilter(typeof(UnitOfWorkAttribute))]
        [Description("更新")]
        public virtual async Task<AjaxResult> Update(BaseMatInputDto[] dtos)
        {
            Check.NotNull(dtos, nameof(dtos));
            OperationResult result = await BaseDataContract.UpdateBaseMats(dtos);
            return result.ToAjaxResult();
        }
        
        /// <summary>
        /// 删除物品数据信息
        /// </summary>
        /// <param name="ids">物品数据信息编号</param>
        /// <returns>JSON操作结果</returns>
        [HttpPost]
        [ModuleInfo]
        [DependOnFunction("Read")]
        [ServiceFilter(typeof(UnitOfWorkAttribute))]
        [Description("删除")]
        public virtual async Task<AjaxResult> Delete(int[] ids)
        {
            Check.NotNull(ids, nameof(ids));
            OperationResult result = await BaseDataContract.DeleteBaseMats(ids);
            return result.ToAjaxResult();
        }
    }
}
