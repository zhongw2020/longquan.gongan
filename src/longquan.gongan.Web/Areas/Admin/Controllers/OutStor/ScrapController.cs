// -----------------------------------------------------------------------
// <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//     可以在此类进行继承重写来扩展基类 ScrapControllerBase
// </once-generated>
//
//  <copyright file="Scrap.cs" company="longquan.gongan">
//      longquan.gongan
//  </copyright>
//  <site>http://longquan.gongan</site>
//  <last-editor>longquan.gongan</last-editor>
// -----------------------------------------------------------------------

using System;

using OSharp.Filter;

using longquan.gongan.OutStor;


namespace longquan.gongan.Web.Areas.Admin.Controllers
{
    /// <summary>
    /// 管理控制器: 资产报废信息
    /// </summary>
    public class ScrapController : ScrapControllerBase
    {
        /// <summary>
        /// 初始化一个<see cref="ScrapController"/>类型的新实例
        /// </summary>
        public ScrapController(IOutStorContract outStorContract,
            IFilterService filterService)
            : base(outStorContract, filterService)
        { }
    }
}
