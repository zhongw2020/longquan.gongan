// -----------------------------------------------------------------------
// <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//     可以在此类进行继承重写来扩展基类 StoreSumControllerBase
// </once-generated>
//
//  <copyright file="StoreSum.cs" company="longquan.gongan">
//      longquan.gongan
//  </copyright>
//  <site>http://longquan.gongan</site>
//  <last-editor>longquan.gongan</last-editor>
// -----------------------------------------------------------------------

using System;

using OSharp.Filter;

using longquan.gongan.Report;


namespace longquan.gongan.Web.Areas.Admin.Controllers
{
    /// <summary>
    /// 管理控制器: 库存盘点信息
    /// </summary>
    public class StoreSumController : StoreSumControllerBase
    {
        /// <summary>
        /// 初始化一个<see cref="StoreSumController"/>类型的新实例
        /// </summary>
        public StoreSumController(IReportContract reportContract,
            IFilterService filterService)
            : base(reportContract, filterService)
        { }
    }
}
