// -----------------------------------------------------------------------
// <auto-generated>
//    此代码由代码生成器生成。
//    手动更改此文件可能导致应用程序出现意外的行为。
//    如果重新生成代码，对此文件的任何修改都会丢失。
//    如果需要扩展此类，可以遵守如下规则进行扩展：
//      1. 横向扩展：如需给当前模块添加方法接口，可新建文件“IOutStorContract.cs”的分部接口“public partial interface IOutStorContract”添加方法，并添加相应新的分部基类 abstract partial class OutStorServiceBase 实现新方法
// </auto-generated>
//
//  <copyright file="IOutStorContract.generated.cs" company="longquan.gongan">
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

using longquan.gongan.OutStor.Dtos;
using longquan.gongan.OutStor.Entities;


namespace longquan.gongan.OutStor
{
    /// <summary>
    /// 业务契约接口：资产出库模块
    /// </summary>
    public partial interface IOutStorContract
    {
        #region 资产领用信息业务

        /// <summary>
        /// 获取 资产领用信息查询数据集
        /// </summary>
        IQueryable<AssetCollection> AssetCollections { get; }

        /// <summary>
        /// 检查资产领用信息信息是否存在
        /// </summary>
        /// <param name="predicate">检查谓语表达式</param>
        /// <param name="id">更新的资产领用信息编号</param>
        /// <returns>资产领用信息是否存在</returns>
        Task<bool> CheckAssetCollectionExists(Expression<Func<AssetCollection, bool>> predicate, int id = default(int));
        
        /// <summary>
        /// 添加资产领用信息信息
        /// </summary>
        /// <param name="dtos">要添加的资产领用信息DTO信息</param>
        /// <returns>业务操作结果</returns>
        Task<OperationResult> CreateAssetCollections(params AssetCollectionInputDto[] dtos);
            
        /// <summary>
        /// 更新资产领用信息信息
        /// </summary>
        /// <param name="dtos">包含更新信息的资产领用信息DTO信息</param>
        /// <returns>业务操作结果</returns>
        Task<OperationResult> UpdateAssetCollections(params AssetCollectionInputDto[] dtos);
            
        /// <summary>
        /// 删除资产领用信息信息
        /// </summary>
        /// <param name="ids">要删除的资产领用信息编号</param>
        /// <returns>业务操作结果</returns>
        Task<OperationResult> DeleteAssetCollections(params int[] ids);
        

        #endregion
        
        #region 资产报废信息业务

        /// <summary>
        /// 获取 资产报废信息查询数据集
        /// </summary>
        IQueryable<Scrap> Scraps { get; }

        /// <summary>
        /// 检查资产报废信息信息是否存在
        /// </summary>
        /// <param name="predicate">检查谓语表达式</param>
        /// <param name="id">更新的资产报废信息编号</param>
        /// <returns>资产报废信息是否存在</returns>
        Task<bool> CheckScrapExists(Expression<Func<Scrap, bool>> predicate, int id = default(int));
        
        /// <summary>
        /// 添加资产报废信息信息
        /// </summary>
        /// <param name="dtos">要添加的资产报废信息DTO信息</param>
        /// <returns>业务操作结果</returns>
        Task<OperationResult> CreateScraps(params ScrapInputDto[] dtos);
            
        /// <summary>
        /// 更新资产报废信息信息
        /// </summary>
        /// <param name="dtos">包含更新信息的资产报废信息DTO信息</param>
        /// <returns>业务操作结果</returns>
        Task<OperationResult> UpdateScraps(params ScrapInputDto[] dtos);
            
        /// <summary>
        /// 删除资产报废信息信息
        /// </summary>
        /// <param name="ids">要删除的资产报废信息编号</param>
        /// <returns>业务操作结果</returns>
        Task<OperationResult> DeleteScraps(params int[] ids);
        

        #endregion
        
        #region 资产调拨信息业务

        /// <summary>
        /// 获取 资产调拨信息查询数据集
        /// </summary>
        IQueryable<Allocation> Allocations { get; }

        /// <summary>
        /// 检查资产调拨信息信息是否存在
        /// </summary>
        /// <param name="predicate">检查谓语表达式</param>
        /// <param name="id">更新的资产调拨信息编号</param>
        /// <returns>资产调拨信息是否存在</returns>
        Task<bool> CheckAllocationExists(Expression<Func<Allocation, bool>> predicate, int id = default(int));
        
        /// <summary>
        /// 添加资产调拨信息信息
        /// </summary>
        /// <param name="dtos">要添加的资产调拨信息DTO信息</param>
        /// <returns>业务操作结果</returns>
        Task<OperationResult> CreateAllocations(params AllocationInputDto[] dtos);
            
        /// <summary>
        /// 更新资产调拨信息信息
        /// </summary>
        /// <param name="dtos">包含更新信息的资产调拨信息DTO信息</param>
        /// <returns>业务操作结果</returns>
        Task<OperationResult> UpdateAllocations(params AllocationInputDto[] dtos);
            
        /// <summary>
        /// 删除资产调拨信息信息
        /// </summary>
        /// <param name="ids">要删除的资产调拨信息编号</param>
        /// <returns>业务操作结果</returns>
        Task<OperationResult> DeleteAllocations(params int[] ids);
        

        #endregion
        
    }
}
