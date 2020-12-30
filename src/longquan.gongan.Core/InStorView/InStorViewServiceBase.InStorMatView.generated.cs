// -----------------------------------------------------------------------
// <auto-generated>
//    此代码由代码生成器生成。
//    手动更改此文件可能导致应用程序出现意外的行为。
//    如果重新生成代码，对此文件的任何修改都会丢失。
//    如果需要扩展此类，可以遵守如下规则进行扩展：
//      1.横向扩展：如需给当前实体 InStorMatView 添加方法，可新建文件“InStorViewServiceBase.InStorMatView.cs”的分部类“public abstract partial class InStorViewServiceBase”添加功能
//      2.纵向扩展：如需要重写当前实体 InStorMatView 的业务实现，可新建文件“InStorViewService.InStorMatView.cs”的分部类“public partial class InStorViewService”对现有方法进行方法重写实现
// </auto-generated>
//
//  <copyright file="InStorViewServiceBase.InStorMatView.generated.cs" company="longquan.gongan">
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

using longquan.gongan.InStorView.Dtos;
using longquan.gongan.InStorView.Entities;


namespace longquan.gongan.InStorView
{
    public abstract partial class InStorViewServiceBase
    {
        /// <summary>
        /// 获取 资产入库视图信息查询数据集
        /// </summary>
        public IQueryable<InStorMatView> InStorMatViews
        {
            get { return InStorMatViewRepository.QueryAsNoTracking(); }
        }

        /// <summary>
        /// 检查资产入库视图信息是否存在
        /// </summary>
        /// <param name="predicate">检查谓语表达式</param>
        /// <param name="id">更新的资产入库视图信息编号</param>
        /// <returns>资产入库视图信息是否存在</returns>
        public virtual Task<bool> CheckInStorMatViewExists(Expression<Func<InStorMatView, bool>> predicate, int id = default(int))
        {
            return InStorMatViewRepository.CheckExistsAsync(predicate, id);
        }
        
        /// <summary>
        /// 添加资产入库视图信息
        /// </summary>
        /// <param name="dtos">要添加的资产入库视图信息DTO信息</param>
        /// <returns>业务操作结果</returns>
        public virtual Task<OperationResult> CreateInStorMatViews(params InStorMatViewInputDto[] dtos)
        {
            Check.Validate<InStorMatViewInputDto, int>(dtos, nameof(dtos));
            return InStorMatViewRepository.InsertAsync(dtos);
        }
        
        /// <summary>
        /// 更新资产入库视图信息
        /// </summary>
        /// <param name="dtos">包含更新信息的资产入库视图信息DTO信息</param>
        /// <returns>业务操作结果</returns>
        public virtual Task<OperationResult> UpdateInStorMatViews(params InStorMatViewInputDto[] dtos)
        {
            Check.Validate<InStorMatViewInputDto, int>(dtos, nameof(dtos));
            return InStorMatViewRepository.UpdateAsync(dtos);
        }
        
        /// <summary>
        /// 删除资产入库视图信息
        /// </summary>
        /// <param name="ids">要删除的资产入库视图信息编号</param>
        /// <returns>业务操作结果</returns>
        public virtual Task<OperationResult> DeleteInStorMatViews(params int[] ids)
        {
            Check.NotNull(ids, nameof(ids));
            return InStorMatViewRepository.DeleteAsync(ids);
        }
    }
}
