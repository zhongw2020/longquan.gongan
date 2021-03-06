// -----------------------------------------------------------------------
// <auto-generated>
//    此代码由代码生成器生成。
//    手动更改此文件可能导致应用程序出现意外的行为。
//    如果重新生成代码，对此文件的任何修改都会丢失。
//    如果需要扩展此类，可以遵守如下规则进行扩展：
//      1.横向扩展：如需给当前实体 AssetCollection 添加方法，可新建文件“OutStorServiceBase.AssetCollection.cs”的分部类“public abstract partial class OutStorServiceBase”添加功能
//      2.纵向扩展：如需要重写当前实体 AssetCollection 的业务实现，可新建文件“OutStorService.AssetCollection.cs”的分部类“public partial class OutStorService”对现有方法进行方法重写实现
// </auto-generated>
//
//  <copyright file="OutStorServiceBase.AssetCollection.generated.cs" company="longquan.gongan">
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
using OSharp.Dependency;
using OSharp.Extensions;
using OSharp.Mapping;

using longquan.gongan.OutStor.Dtos;
using longquan.gongan.OutStor.Entities;


namespace longquan.gongan.OutStor
{
    public abstract partial class OutStorServiceBase
    {
        /// <summary>
        /// 获取 资产领用信息查询数据集
        /// </summary>
        public IQueryable<AssetCollection> AssetCollections
        {
            get { return AssetCollectionRepository.QueryAsNoTracking(); }
        }

        /// <summary>
        /// 检查资产领用信息是否存在
        /// </summary>
        /// <param name="predicate">检查谓语表达式</param>
        /// <param name="id">更新的资产领用信息编号</param>
        /// <returns>资产领用信息是否存在</returns>
        public virtual Task<bool> CheckAssetCollectionExists(Expression<Func<AssetCollection, bool>> predicate, int id = default(int))
        {
            return AssetCollectionRepository.CheckExistsAsync(predicate, id);
        }
        
        /// <summary>
        /// 添加资产领用信息
        /// </summary>
        /// <param name="dtos">要添加的资产领用信息DTO信息</param>
        /// <returns>业务操作结果</returns>
        public virtual Task<OperationResult> CreateAssetCollections(params AssetCollectionInputDto[] dtos)
        {
            Check.Validate<AssetCollectionInputDto, int>(dtos, nameof(dtos));
            return AssetCollectionRepository.InsertAsync(dtos);
        }
        
        /// <summary>
        /// 更新资产领用信息
        /// </summary>
        /// <param name="dtos">包含更新信息的资产领用信息DTO信息</param>
        /// <returns>业务操作结果</returns>
        public virtual Task<OperationResult> UpdateAssetCollections(params AssetCollectionInputDto[] dtos)
        {
            Check.Validate<AssetCollectionInputDto, int>(dtos, nameof(dtos));
            return AssetCollectionRepository.UpdateAsync(dtos);
        }
        
        /// <summary>
        /// 删除资产领用信息
        /// </summary>
        /// <param name="ids">要删除的资产领用信息编号</param>
        /// <returns>业务操作结果</returns>
        public virtual Task<OperationResult> DeleteAssetCollections(params int[] ids)
        {
            Check.NotNull(ids, nameof(ids));
            return AssetCollectionRepository.DeleteAsync(ids);
        }
    }
}
