// -----------------------------------------------------------------------
// <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//     可以在此类进行继承重写来扩展基类 BaseDeptControllerBase
// </once-generated>
//
//  <copyright file="BaseDept.cs" company="longquan.gongan">
//      longquan.gongan
//  </copyright>
//  <site>http://longquan.gongan</site>
//  <last-editor>longquan.gongan</last-editor>
// -----------------------------------------------------------------------

using System;

using OSharp.Filter;

using longquan.gongan.BaseData;


namespace longquan.gongan.Web.Areas.Admin.Controllers
{
    /// <summary>
    /// 管理控制器: 部门数据信息
    /// </summary>
    public class BaseDeptController : BaseDeptControllerBase
    {
        /// <summary>
        /// 初始化一个<see cref="BaseDeptController"/>类型的新实例
        /// </summary>
        public BaseDeptController(IBaseDataContract baseDataContract,
            IFilterService filterService)
            : base(baseDataContract, filterService)
        { }
    }
}
