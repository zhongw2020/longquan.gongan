// -----------------------------------------------------------------------
// <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//     可以在此类进行继承重写来扩展基类 BaseDataServiceBase
// </once-generated>
//
//  <copyright file="IBaseDataService.cs" company="longquan.gongan">
//      longquan.gongan
//  </copyright>
//  <site>http://longquan.gongan</site>
//  <last-editor>longquan.gongan</last-editor>
// -----------------------------------------------------------------------

using System;


namespace longquan.gongan.BaseData
{
    /// <summary>
    /// 业务实现基类：基础数据模块
    /// </summary>
    public partial class BaseDataService : BaseDataServiceBase
    {
        /// <summary>
        /// 初始化一个<see cref="BaseDataService"/>类型的新实例
        /// </summary>
        public BaseDataService(IServiceProvider provider)
            : base(provider)
        { }
    }
}
