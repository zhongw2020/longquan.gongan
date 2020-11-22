// -----------------------------------------------------------------------
// <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//     可以在此类进行继承重写来扩展基类 OutStorServiceBase
// </once-generated>
//
//  <copyright file="IOutStorService.cs" company="longquan.gongan">
//      longquan.gongan
//  </copyright>
//  <site>http://longquan.gongan</site>
//  <last-editor>longquan.gongan</last-editor>
// -----------------------------------------------------------------------

using System;


namespace longquan.gongan.OutStor
{
    /// <summary>
    /// 业务实现基类：资产出库模块
    /// </summary>
    public partial class OutStorService : OutStorServiceBase
    {
        /// <summary>
        /// 初始化一个<see cref="OutStorService"/>类型的新实例
        /// </summary>
        public OutStorService(IServiceProvider provider)
            : base(provider)
        { }
    }
}
