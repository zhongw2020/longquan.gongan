// -----------------------------------------------------------------------
// <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//     可以在此类进行继承重写来扩展基类 StorWarnControllerBase
// </once-generated>
//
//  <copyright file="StorWarn.cs" company="longquan.gongan">
//      longquan.gongan
//  </copyright>
//  <site>http://longquan.gongan</site>
//  <last-editor>longquan.gongan</last-editor>
// -----------------------------------------------------------------------

using System;

using OSharp.Filter;

using longquan.gongan.AllReport;


namespace longquan.gongan.Web.Areas.Admin.Controllers
{
    /// <summary>
    /// 管理控制器: 库存量告警信息
    /// </summary>
    public class StorWarnController : StorWarnControllerBase
    {
        /// <summary>
        /// 初始化一个<see cref="StorWarnController"/>类型的新实例
        /// </summary>
        public StorWarnController(IAllReportContract allReportContract,
            IFilterService filterService)
            : base(allReportContract, filterService)
        { }
    }
}
