// -----------------------------------------------------------------------
// <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//     可以在此类进行继承重写来扩展基类 InStorMatControllerBase
// </once-generated>
//
//  <copyright file="InStorMat.cs" company="longquan.gongan">
//      longquan.gongan
//  </copyright>
//  <site>http://longquan.gongan</site>
//  <last-editor>longquan.gongan</last-editor>
// -----------------------------------------------------------------------

using System;

using OSharp.Filter;

using longquan.gongan.InStor;


namespace longquan.gongan.Web.Areas.Admin.Controllers
{
    /// <summary>
    /// 管理控制器: 资产入库信息
    /// </summary>
    public class InStorMatController : InStorMatControllerBase
    {
        /// <summary>
        /// 初始化一个<see cref="InStorMatController"/>类型的新实例
        /// </summary>
        public InStorMatController(IInStorContract inStorContract,
            IFilterService filterService)
            : base(inStorContract, filterService)
        { }
    }
}
