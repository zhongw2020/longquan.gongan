// -----------------------------------------------------------------------
// <auto-generated>
//    此代码由代码生成器生成。
//    手动更改此文件可能导致应用程序出现意外的行为。
//    如果重新生成代码，对此文件的任何修改都会丢失。
//    如果需要扩展此类，可以遵守如下规则进行扩展：
//      1. 横向扩展：如需给当前模块添加方法接口，可新建文件“IBaseDataContract.cs”的分部接口“public partial interface IBaseDataContract”添加方法，并添加相应新的分部基类 abstract partial class BaseDataServiceBase 实现新方法
// </auto-generated>
//
//  <copyright file="IBaseDataContract.generated.cs" company="longquan.gongan">
//      longquan.gongan
//  </copyright>
//  <site>http://longquan.gongan</site>
//  <last-editor>longquan.gongan</last-editor>
// -----------------------------------------------------------------------

using System;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

using OSharp.Data;
using OSharp.Extensions;

using longquan.gongan.BaseData.Dtos;
using longquan.gongan.BaseData.Entities;


namespace longquan.gongan.BaseData
{
    /// <summary>
    /// 业务契约接口：基础数据模块
    /// </summary>
    public partial interface IBaseDataContract
    {
        #region 人员数据信息业务

        /// <summary>
        /// 获取 人员数据信息查询数据集
        /// </summary>
        IQueryable<BaseStaff> BaseStaffs { get; }

        /// <summary>
        /// 检查人员数据信息信息是否存在
        /// </summary>
        /// <param name="predicate">检查谓语表达式</param>
        /// <param name="id">更新的人员数据信息编号</param>
        /// <returns>人员数据信息是否存在</returns>
        Task<bool> CheckBaseStaffExists(Expression<Func<BaseStaff, bool>> predicate, int id = default(int));
        
        /// <summary>
        /// 添加人员数据信息信息
        /// </summary>
        /// <param name="dtos">要添加的人员数据信息DTO信息</param>
        /// <returns>业务操作结果</returns>
        Task<OperationResult> CreateBaseStaffs(params BaseStaffInputDto[] dtos);
            
        /// <summary>
        /// 更新人员数据信息信息
        /// </summary>
        /// <param name="dtos">包含更新信息的人员数据信息DTO信息</param>
        /// <returns>业务操作结果</returns>
        Task<OperationResult> UpdateBaseStaffs(params BaseStaffInputDto[] dtos);
            
        /// <summary>
        /// 删除人员数据信息信息
        /// </summary>
        /// <param name="ids">要删除的人员数据信息编号</param>
        /// <returns>业务操作结果</returns>
        Task<OperationResult> DeleteBaseStaffs(params int[] ids);
        

        #endregion
        
        #region 部门数据信息业务

        /// <summary>
        /// 获取 部门数据信息查询数据集
        /// </summary>
        IQueryable<BaseDept> BaseDepts { get; }

        /// <summary>
        /// 检查部门数据信息信息是否存在
        /// </summary>
        /// <param name="predicate">检查谓语表达式</param>
        /// <param name="id">更新的部门数据信息编号</param>
        /// <returns>部门数据信息是否存在</returns>
        Task<bool> CheckBaseDeptExists(Expression<Func<BaseDept, bool>> predicate, int id = default(int));
        
        /// <summary>
        /// 添加部门数据信息信息
        /// </summary>
        /// <param name="dtos">要添加的部门数据信息DTO信息</param>
        /// <returns>业务操作结果</returns>
        Task<OperationResult> CreateBaseDepts(params BaseDeptInputDto[] dtos);
            
        /// <summary>
        /// 更新部门数据信息信息
        /// </summary>
        /// <param name="dtos">包含更新信息的部门数据信息DTO信息</param>
        /// <returns>业务操作结果</returns>
        Task<OperationResult> UpdateBaseDepts(params BaseDeptInputDto[] dtos);
            
        /// <summary>
        /// 删除部门数据信息信息
        /// </summary>
        /// <param name="ids">要删除的部门数据信息编号</param>
        /// <returns>业务操作结果</returns>
        Task<OperationResult> DeleteBaseDepts(params int[] ids);
        

        #endregion
        
        #region 仓库数据信息业务

        /// <summary>
        /// 获取 仓库数据信息查询数据集
        /// </summary>
        IQueryable<BaseStore> BaseStores { get; }

        /// <summary>
        /// 检查仓库数据信息信息是否存在
        /// </summary>
        /// <param name="predicate">检查谓语表达式</param>
        /// <param name="id">更新的仓库数据信息编号</param>
        /// <returns>仓库数据信息是否存在</returns>
        Task<bool> CheckBaseStoreExists(Expression<Func<BaseStore, bool>> predicate, int id = default(int));
        
        /// <summary>
        /// 添加仓库数据信息信息
        /// </summary>
        /// <param name="dtos">要添加的仓库数据信息DTO信息</param>
        /// <returns>业务操作结果</returns>
        Task<OperationResult> CreateBaseStores(params BaseStoreInputDto[] dtos);
            
        /// <summary>
        /// 更新仓库数据信息信息
        /// </summary>
        /// <param name="dtos">包含更新信息的仓库数据信息DTO信息</param>
        /// <returns>业务操作结果</returns>
        Task<OperationResult> UpdateBaseStores(params BaseStoreInputDto[] dtos);
            
        /// <summary>
        /// 删除仓库数据信息信息
        /// </summary>
        /// <param name="ids">要删除的仓库数据信息编号</param>
        /// <returns>业务操作结果</returns>
        Task<OperationResult> DeleteBaseStores(params int[] ids);
        

        #endregion
        
        #region 供应商数据信息业务

        /// <summary>
        /// 获取 供应商数据信息查询数据集
        /// </summary>
        IQueryable<BaseSup> BaseSups { get; }

        /// <summary>
        /// 检查供应商数据信息信息是否存在
        /// </summary>
        /// <param name="predicate">检查谓语表达式</param>
        /// <param name="id">更新的供应商数据信息编号</param>
        /// <returns>供应商数据信息是否存在</returns>
        Task<bool> CheckBaseSupExists(Expression<Func<BaseSup, bool>> predicate, int id = default(int));
        
        /// <summary>
        /// 添加供应商数据信息信息
        /// </summary>
        /// <param name="dtos">要添加的供应商数据信息DTO信息</param>
        /// <returns>业务操作结果</returns>
        Task<OperationResult> CreateBaseSups(params BaseSupInputDto[] dtos);
            
        /// <summary>
        /// 更新供应商数据信息信息
        /// </summary>
        /// <param name="dtos">包含更新信息的供应商数据信息DTO信息</param>
        /// <returns>业务操作结果</returns>
        Task<OperationResult> UpdateBaseSups(params BaseSupInputDto[] dtos);
            
        /// <summary>
        /// 删除供应商数据信息信息
        /// </summary>
        /// <param name="ids">要删除的供应商数据信息编号</param>
        /// <returns>业务操作结果</returns>
        Task<OperationResult> DeleteBaseSups(params int[] ids);
        

        #endregion
        
        #region 分类数据信息业务

        /// <summary>
        /// 获取 分类数据信息查询数据集
        /// </summary>
        IQueryable<BaseKind> BaseKinds { get; }

        /// <summary>
        /// 检查分类数据信息信息是否存在
        /// </summary>
        /// <param name="predicate">检查谓语表达式</param>
        /// <param name="id">更新的分类数据信息编号</param>
        /// <returns>分类数据信息是否存在</returns>
        Task<bool> CheckBaseKindExists(Expression<Func<BaseKind, bool>> predicate, int id = default(int));
        
        /// <summary>
        /// 添加分类数据信息信息
        /// </summary>
        /// <param name="dtos">要添加的分类数据信息DTO信息</param>
        /// <returns>业务操作结果</returns>
        Task<OperationResult> CreateBaseKinds(params BaseKindInputDto[] dtos);
            
        /// <summary>
        /// 更新分类数据信息信息
        /// </summary>
        /// <param name="dtos">包含更新信息的分类数据信息DTO信息</param>
        /// <returns>业务操作结果</returns>
        Task<OperationResult> UpdateBaseKinds(params BaseKindInputDto[] dtos);
            
        /// <summary>
        /// 删除分类数据信息信息
        /// </summary>
        /// <param name="ids">要删除的分类数据信息编号</param>
        /// <returns>业务操作结果</returns>
        Task<OperationResult> DeleteBaseKinds(params int[] ids);
        

        #endregion
        
        #region 物品数据信息业务

        /// <summary>
        /// 获取 物品数据信息查询数据集
        /// </summary>
        IQueryable<BaseMat> BaseMats { get; }

        /// <summary>
        /// 检查物品数据信息信息是否存在
        /// </summary>
        /// <param name="predicate">检查谓语表达式</param>
        /// <param name="id">更新的物品数据信息编号</param>
        /// <returns>物品数据信息是否存在</returns>
        Task<bool> CheckBaseMatExists(Expression<Func<BaseMat, bool>> predicate, int id = default(int));
        
        /// <summary>
        /// 添加物品数据信息信息
        /// </summary>
        /// <param name="dtos">要添加的物品数据信息DTO信息</param>
        /// <returns>业务操作结果</returns>
        Task<OperationResult> CreateBaseMats(params BaseMatInputDto[] dtos);
            
        /// <summary>
        /// 更新物品数据信息信息
        /// </summary>
        /// <param name="dtos">包含更新信息的物品数据信息DTO信息</param>
        /// <returns>业务操作结果</returns>
        Task<OperationResult> UpdateBaseMats(params BaseMatInputDto[] dtos);
            
        /// <summary>
        /// 删除物品数据信息信息
        /// </summary>
        /// <param name="ids">要删除的物品数据信息编号</param>
        /// <returns>业务操作结果</returns>
        Task<OperationResult> DeleteBaseMats(params int[] ids);
        

        #endregion
        
    }
}
