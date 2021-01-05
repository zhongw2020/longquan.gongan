// -----------------------------------------------------------------------
// <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//     可以在此类进行继承重写来扩展基类 DateWarnControllerBase
// </once-generated>
//
//  <copyright file="DateWarn.cs" company="longquan.gongan">
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
    /// 管理控制器: 质保期告警信息
    /// </summary>
    public class DateWarnController : DateWarnControllerBase
    {
        /// <summary>
        /// 初始化一个<see cref="DateWarnController"/>类型的新实例
        /// </summary>
        public DateWarnController(IReportContract reportContract,
            IFilterService filterService)
            : base(reportContract, filterService)
        { }
    }
}
