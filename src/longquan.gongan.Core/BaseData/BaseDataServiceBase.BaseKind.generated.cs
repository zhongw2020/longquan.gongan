// -----------------------------------------------------------------------
// <auto-generated>
//    此代码由代码生成器生成。
//    手动更改此文件可能导致应用程序出现意外的行为。
//    如果重新生成代码，对此文件的任何修改都会丢失。
//    如果需要扩展此类，可以遵守如下规则进行扩展：
//      1.横向扩展：如需给当前实体 BaseKind 添加方法，可新建文件“BaseDataServiceBase.BaseKind.cs”的分部类“public abstract partial class BaseDataServiceBase”添加功能
//      2.纵向扩展：如需要重写当前实体 BaseKind 的业务实现，可新建文件“BaseDataService.BaseKind.cs”的分部类“public partial class BaseDataService”对现有方法进行方法重写实现
// </auto-generated>
//
//  <copyright file="BaseDataServiceBase.BaseKind.generated.cs" company="longquan.gongan">
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

using longquan.gongan.BaseData.Dtos;
using longquan.gongan.BaseData.Entities;


namespace longquan.gongan.BaseData
{
    public abstract partial class BaseDataServiceBase
    {
        /// <summary>
        /// 获取 分类数据信息查询数据集
        /// </summary>
        public IQueryable<BaseKind> BaseKinds
        {
            get { return BaseKindRepository.QueryAsNoTracking(); }
        }

        /// <summary>
        /// 检查分类数据信息是否存在
        /// </summary>
        /// <param name="predicate">检查谓语表达式</param>
        /// <param name="id">更新的分类数据信息编号</param>
        /// <returns>分类数据信息是否存在</returns>
        public virtual Task<bool> CheckBaseKindExists(Expression<Func<BaseKind, bool>> predicate, int id = default(int))
        {
            return BaseKindRepository.CheckExistsAsync(predicate, id);
        }
        
        /// <summary>
        /// 添加分类数据信息
        /// </summary>
        /// <param name="dtos">要添加的分类数据信息DTO信息</param>
        /// <returns>业务操作结果</returns>
        public virtual Task<OperationResult> CreateBaseKinds(params BaseKindInputDto[] dtos)
        {
            Check.Validate<BaseKindInputDto, int>(dtos, nameof(dtos));
            return BaseKindRepository.InsertAsync(dtos);
        }
        
        /// <summary>
        /// 更新分类数据信息
        /// </summary>
        /// <param name="dtos">包含更新信息的分类数据信息DTO信息</param>
        /// <returns>业务操作结果</returns>
        public virtual Task<OperationResult> UpdateBaseKinds(params BaseKindInputDto[] dtos)
        {
            Check.Validate<BaseKindInputDto, int>(dtos, nameof(dtos));
            return BaseKindRepository.UpdateAsync(dtos);
        }
        
        /// <summary>
        /// 删除分类数据信息
        /// </summary>
        /// <param name="ids">要删除的分类数据信息编号</param>
        /// <returns>业务操作结果</returns>
        public virtual Task<OperationResult> DeleteBaseKinds(params int[] ids)
        {
            Check.NotNull(ids, nameof(ids));
            return BaseKindRepository.DeleteAsync(ids);
        }
    }
}
