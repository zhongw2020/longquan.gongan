//------------------------------------------------------------------------------
// <auto-generated>
//    此代码由代码生成器生成。
//    手动更改此文件可能导致应用程序出现意外的行为。
//    如果重新生成代码，对此文件的任何修改都会丢失。
//    如果需要扩展此类：可遵守如下规则进行扩展：
//      1.横向扩展：如需添加额外的属性，可新建文件“BaseSup.cs”的分部类“public partial class BaseSup”}添加属性
// </auto-generated>
//
//  <copyright file="BaseSup.generated.cs" company="longquan.gongan">
//      longquan.gongan
//  </copyright>
//  <site>http://longquan.gongan</site>
//  <last-editor>longquan.gongan</last-editor>
// -----------------------------------------------------------------------

using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

using OSharp.Entity;


namespace longquan.gongan.BaseData.Entities
{
    /// <summary>
    /// 实体类：供应商数据信息
    /// </summary>
    [Description("供应商数据信息")]
    [TableNamePrefix("BaseData")]
    public partial class BaseSup : EntityBase<int>, ISoftDeletable, ICreatedTime
    {
        /// <summary>
        /// 获取或设置 供应商名称
        /// </summary>
        [DisplayName("供应商名称")]
        public string Name { get; set; }

        /// <summary>
        /// 获取或设置 状态
        /// </summary>
        [DisplayName("状态")]
        public bool State { get; set; }

        /// <summary>
        /// 获取或设置 其他
        /// </summary>
        [DisplayName("其他")]
        public string Other { get; set; }

        /// <summary>
        /// 获取或设置 删除时间
        /// </summary>
        [DisplayName("删除时间")]
        public DateTime? DeletedTime { get; set; }

        /// <summary>
        /// 获取或设置 创建时间
        /// </summary>
        [DisplayName("创建时间")]
        public DateTime CreatedTime { get; set; }

    }
}

