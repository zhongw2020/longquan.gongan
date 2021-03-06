// -----------------------------------------------------------------------
// <auto-generated>
//    此代码由代码生成器生成。
//    手动更改此文件可能导致应用程序出现意外的行为。
//    如果重新生成代码，对此文件的任何修改都会丢失。
//    如果需要扩展此类：可遵守如下规则进行扩展：
//      1.横向扩展：如需添加额外的属性，可新建文件“StoreWarnOutputDto.cs”的分部类“public partial class StoreWarnOutputDto”}添加属性
// </auto-generated>
//
//  <copyright file="StoreWarnOutputDto.generated.cs" company="longquan.gongan">
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

using longquan.gongan.Report.Entities;

namespace longquan.gongan.Report.Dtos
{
    /// <summary>
    /// 输入DTO：库存量告警信息
    /// </summary>
    [MapFrom(typeof(StoreWarn))]
    [Description("库存量告警信息")]
    public partial class StoreWarnOutputDto : IOutputDto, IDataAuthEnabled
    {
        /// <summary>
        /// 初始化一个<see cref="StoreWarnOutputDto"/>类型的新实例
        /// </summary>
        public StoreWarnOutputDto()
        { }

        /// <summary>
        /// 初始化一个<see cref="StoreWarnOutputDto"/>类型的新实例
        /// </summary>
        public StoreWarnOutputDto(StoreWarn entity)
        {
            Id = entity.Id;
            ComPany = entity.ComPany;
            BigType = entity.BigType;
            Managerdepartment = entity.Managerdepartment;
            MatName = entity.MatName;
            SafeNum = entity.SafeNum;
            SumNum = entity.SumNum;
        }

        /// <summary>
        /// 获取或设置 编号
        /// </summary>
        [DisplayName("编号")]
        public int Id { get; set; }

        /// <summary>
        /// 获取或设置 所属单位
        /// </summary>
        [DisplayName("所属单位")]
        public string ComPany { get; set; }

        /// <summary>
        /// 获取或设置 国标大类
        /// </summary>
        [DisplayName("国标大类")]
        public string BigType { get; set; }

        /// <summary>
        /// 获取或设置 使用部门
        /// </summary>
        [DisplayName("使用部门")]
        public string Managerdepartment { get; set; }

        /// <summary>
        /// 获取或设置 资产名称
        /// </summary>
        [DisplayName("资产名称")]
        public string MatName { get; set; }

        /// <summary>
        /// 获取或设置 安全库存
        /// </summary>
        [DisplayName("安全库存")]
        public double SafeNum { get; set; }

        /// <summary>
        /// 获取或设置 库存总量
        /// </summary>
        [DisplayName("库存总量")]
        public double SumNum { get; set; }

        /// <summary>
        /// 获取或设置 是否可更新的数据权限状态
        /// </summary>
        public bool Updatable { get; set; }

        /// <summary>
        /// 获取或设置 是否可删除的数据权限状态
        /// </summary>
        public bool Deletable { get; set; }

    }
}
