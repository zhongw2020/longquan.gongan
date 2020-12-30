// -----------------------------------------------------------------------
// <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//     可以在此类进行继承重写来扩展基类 InStorMatViewControllerBase
// </once-generated>
//
//  <copyright file="InStorMatView.cs" company="longquan.gongan">
//      longquan.gongan
//  </copyright>
//  <site>http://longquan.gongan</site>
//  <last-editor>longquan.gongan</last-editor>
// -----------------------------------------------------------------------

using System;

using OSharp.Filter;

using longquan.gongan.InStorView;


namespace longquan.gongan.Web.Areas.Admin.Controllers
{
    /// <summary>
    /// 管理控制器: 资产入库信息
    /// </summary>
    public class InStorMatViewController : InStorMatViewControllerBase
    {
        /// <summary>
        /// 初始化一个<see cref="InStorMatViewController"/>类型的新实例
        /// </summary>
        public InStorMatViewController(IInStorViewContract inStorViewContract,
            IFilterService filterService)
            : base(inStorViewContract, filterService)
        { }
    }
}
