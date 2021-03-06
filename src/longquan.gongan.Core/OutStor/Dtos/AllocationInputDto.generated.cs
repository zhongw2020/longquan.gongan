// -----------------------------------------------------------------------
// <auto-generated>
//    此代码由代码生成器生成。
//    手动更改此文件可能导致应用程序出现意外的行为。
//    如果重新生成代码，对此文件的任何修改都会丢失。
//    如果需要扩展此类：可遵守如下规则进行扩展：
//      1.横向扩展：如需添加额外的属性，可新建文件“AllocationInputDto.cs”的分部类“public partial class AllocationInputDto”}添加属性
// </auto-generated>
//
//  <copyright file="AllocationInputDto.generated.cs" company="longquan.gongan">
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
using OSharp.Mapping;

using longquan.gongan.OutStor.Entities;


namespace longquan.gongan.OutStor.Dtos
{
    /// <summary>
    /// 输入DTO：资产调拨信息
    /// </summary>
    [MapTo(typeof(Allocation))]
    [Description("资产调拨信息")]
    public partial class AllocationInputDto : IInputDto<int>
    {
        /// <summary>
        /// 获取或设置 编号
        /// </summary>
        [DisplayName("编号")]
        public int Id { get; set; }

        /// <summary>
        /// 获取或设置 调拨编号
        /// </summary>
        [DisplayName("调拨编号")]
        public string AllocationNo { get; set; }

        /// <summary>
        /// 获取或设置 资产编号
        /// </summary>
        [DisplayName("资产编号")]
        public string MatNo { get; set; }

        /// <summary>
        /// 获取或设置 调至部门
        /// </summary>
        [DisplayName("调至部门")]
        public string Dept { get; set; }

        /// <summary>
        /// 获取或设置 调拨日期
        /// </summary>
        [DisplayName("调拨日期")]
        public DateTime AllocationDate { get; set; }

        /// <summary>
        /// 获取或设置 审核状态
        /// </summary>
        [DisplayName("审核状态")]
        public string VerifyState { get; set; }

        /// <summary>
        /// 获取或设置 备注
        /// </summary>
        [DisplayName("备注")]
        public string Remark { get; set; }

    }
}
