// -----------------------------------------------------------------------
// <auto-generated>
//    此代码由代码生成器生成。
//    手动更改此文件可能导致应用程序出现意外的行为。
//    如果重新生成代码，对此文件的任何修改都会丢失。
//    如果需要扩展此类，可以遵守如下规则进行扩展：
//      1. 横向扩展：如需给当前模块添加方法接口，可新建文件“IAllReportContract.cs”的分部接口“public partial interface IAllReportContract”添加方法，并添加相应新的分部基类 abstract partial class AllReportServiceBase 实现新方法
// </auto-generated>
//
//  <copyright file="IAllReportContract.generated.cs" company="longquan.gongan">
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

using longquan.gongan.AllReport.Dtos;
using longquan.gongan.AllReport.Entities;


namespace longquan.gongan.AllReport
{
    /// <summary>
    /// 业务契约接口：模块
    /// </summary>
    public partial interface IAllReportContract
    {
        #region 库存量告警信息业务

        /// <summary>
        /// 获取 库存量告警信息查询数据集
        /// </summary>
        IQueryable<StorWarn> StorWarns { get; }

        /// <summary>
        /// 检查库存量告警信息信息是否存在
        /// </summary>
        /// <param name="predicate">检查谓语表达式</param>
        /// <param name="id">更新的库存量告警信息编号</param>
        /// <returns>库存量告警信息是否存在</returns>
        Task<bool> CheckStorWarnExists(Expression<Func<StorWarn, bool>> predicate, int id = default(int));
        
        /// <summary>
        /// 添加库存量告警信息信息
        /// </summary>
        /// <param name="dtos">要添加的库存量告警信息DTO信息</param>
        /// <returns>业务操作结果</returns>
        Task<OperationResult> CreateStorWarns(params StorWarnInputDto[] dtos);
            
        /// <summary>
        /// 更新库存量告警信息信息
        /// </summary>
        /// <param name="dtos">包含更新信息的库存量告警信息DTO信息</param>
        /// <returns>业务操作结果</returns>
        Task<OperationResult> UpdateStorWarns(params StorWarnInputDto[] dtos);
    
        #endregion
        
    }
}
