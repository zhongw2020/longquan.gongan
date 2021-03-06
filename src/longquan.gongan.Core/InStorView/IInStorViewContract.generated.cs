// -----------------------------------------------------------------------
// <auto-generated>
//    此代码由代码生成器生成。
//    手动更改此文件可能导致应用程序出现意外的行为。
//    如果重新生成代码，对此文件的任何修改都会丢失。
//    如果需要扩展此类，可以遵守如下规则进行扩展：
//      1. 横向扩展：如需给当前模块添加方法接口，可新建文件“IInStorViewContract.cs”的分部接口“public partial interface IInStorViewContract”添加方法，并添加相应新的分部基类 abstract partial class InStorViewServiceBase 实现新方法
// </auto-generated>
//
//  <copyright file="IInStorViewContract.generated.cs" company="longquan.gongan">
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

using longquan.gongan.InStorView.Dtos;
using longquan.gongan.InStorView.Entities;


namespace longquan.gongan.InStorView
{
    /// <summary>
    /// 业务契约接口：模块
    /// </summary>
    public partial interface IInStorViewContract
    {
        #region 资产入库视图信息业务

        /// <summary>
        /// 获取 资产入库视图信息查询数据集
        /// </summary>
        IQueryable<InStorMatView> InStorMatViews { get; }

        /// <summary>
        /// 检查资产入库视图信息信息是否存在
        /// </summary>
        /// <param name="predicate">检查谓语表达式</param>
        /// <param name="id">更新的资产入库视图信息编号</param>
        /// <returns>资产入库视图信息是否存在</returns>
        Task<bool> CheckInStorMatViewExists(Expression<Func<InStorMatView, bool>> predicate, int id = default(int));
        
        /// <summary>
        /// 添加资产入库视图信息信息
        /// </summary>
        /// <param name="dtos">要添加的资产入库视图信息DTO信息</param>
        /// <returns>业务操作结果</returns>
        Task<OperationResult> CreateInStorMatViews(params InStorMatViewInputDto[] dtos);
            
        /// <summary>
        /// 更新资产入库视图信息信息
        /// </summary>
        /// <param name="dtos">包含更新信息的资产入库视图信息DTO信息</param>
        /// <returns>业务操作结果</returns>
        Task<OperationResult> UpdateInStorMatViews(params InStorMatViewInputDto[] dtos);
            
        /// <summary>
        /// 删除资产入库视图信息信息
        /// </summary>
        /// <param name="ids">要删除的资产入库视图信息编号</param>
        /// <returns>业务操作结果</returns>
        Task<OperationResult> DeleteInStorMatViews(params int[] ids);
        

        #endregion
        
    }
}
