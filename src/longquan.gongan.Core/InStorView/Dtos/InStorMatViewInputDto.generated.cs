// -----------------------------------------------------------------------
// <auto-generated>
//    此代码由代码生成器生成。
//    手动更改此文件可能导致应用程序出现意外的行为。
//    如果重新生成代码，对此文件的任何修改都会丢失。
//    如果需要扩展此类：可遵守如下规则进行扩展：
//      1.横向扩展：如需添加额外的属性，可新建文件“InStorMatViewInputDto.cs”的分部类“public partial class InStorMatViewInputDto”}添加属性
// </auto-generated>
//
//  <copyright file="InStorMatViewInputDto.generated.cs" company="longquan.gongan">
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

using longquan.gongan.InStorView.Entities;


namespace longquan.gongan.InStorView.Dtos
{
    /// <summary>
    /// 输入DTO：资产入库视图信息
    /// </summary>
    [MapTo(typeof(InStorMatView))]
    [Description("资产入库视图信息")]
    public partial class InStorMatViewInputDto : IInputDto<int>
    {
        /// <summary>
        /// 获取或设置 编号
        /// </summary>
        [DisplayName("编号")]
        public int Id { get; set; }

        /// <summary>
        /// 获取或设置 入库凭证号
        /// </summary>
        [DisplayName("入库凭证号"), Required]
        public string InVoucher { get; set; }

        /// <summary>
        /// 获取或设置 审核状态
        /// </summary>
        [DisplayName("审核状态")]
        public string InVerifyState { get; set; }

        /// <summary>
        /// 获取或设置 入账日期
        /// </summary>
        [DisplayName("入账日期")]
        public DateTime InaccountDate { get; set; }

        /// <summary>
        /// 获取或设置 价值类型
        /// </summary>
        [DisplayName("价值类型")]
        public string ValueType { get; set; }

        /// <summary>
        /// 获取或设置 入库价格
        /// </summary>
        [DisplayName("入库价格")]
        public double InPrice { get; set; }

        /// <summary>
        /// 获取或设置 获取方式
        /// </summary>
        [DisplayName("获取方式")]
        public string GetMethod { get; set; }

        /// <summary>
        /// 获取或设置 取得日期
        /// </summary>
        [DisplayName("取得日期")]
        public DateTime GetDate { get; set; }

        /// <summary>
        /// 获取或设置 使用状况
        /// </summary>
        [DisplayName("使用状况")]
        public string Usage { get; set; }

        /// <summary>
        /// 获取或设置 管理部门名称
        /// </summary>
        [DisplayName("管理部门名称")]
        public string ManagerdepartmentName { get; set; }

        /// <summary>
        /// 获取或设置 使用部门名称
        /// </summary>
        [DisplayName("使用部门名称")]
        public string UserdepartmentName { get; set; }

        /// <summary>
        /// 获取或设置 使用人员名称
        /// </summary>
        [DisplayName("使用人员名称")]
        public string UserName { get; set; }

        /// <summary>
        /// 获取或设置 用途
        /// </summary>
        [DisplayName("用途")]
        public string Purpose { get; set; }

        /// <summary>
        /// 获取或设置 所属单位
        /// </summary>
        [DisplayName("所属单位")]
        public string Company { get; set; }

        /// <summary>
        /// 获取或设置 仓库名称
        /// </summary>
        [DisplayName("仓库名称")]
        public string StoreName { get; set; }

        /// <summary>
        /// 获取或设置 销售商名称
        /// </summary>
        [DisplayName("销售商名称")]
        public string SupName { get; set; }

        /// <summary>
        /// 获取或设置 备注
        /// </summary>
        [DisplayName("备注")]
        public string Remark { get; set; }

        /// <summary>
        /// 获取或设置 其他
        /// </summary>
        [DisplayName("其他")]
        public string Other { get; set; }

        /// <summary>
        /// 获取或设置 当前数量
        /// </summary>
        [DisplayName("当前数量")]
        public double Curr_Num { get; set; }

        /// <summary>
        /// 获取或设置 入库数量
        /// </summary>
        [DisplayName("入库数量")]
        public double In_Num { get; set; }

        /// <summary>
        /// 获取或设置 质保期
        /// </summary>
        [DisplayName("质保期")]
        public DateTime WarrantyPeriod { get; set; }

        /// <summary>
        /// 获取或设置 生产日期
        /// </summary>
        [DisplayName("生产日期")]
        public DateTime ManufactureDate { get; set; }

        /// <summary>
        /// 获取或设置 资产名称
        /// </summary>
        [DisplayName("资产名称")]
        public string Name { get; set; }

    }
}
