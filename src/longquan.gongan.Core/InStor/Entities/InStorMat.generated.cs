//------------------------------------------------------------------------------
// <auto-generated>
//    此代码由代码生成器生成。
//    手动更改此文件可能导致应用程序出现意外的行为。
//    如果重新生成代码，对此文件的任何修改都会丢失。
//    如果需要扩展此类：可遵守如下规则进行扩展：
//      1.横向扩展：如需添加额外的属性，可新建文件“InStorMat.cs”的分部类“public partial class InStorMat”}添加属性
// </auto-generated>
//
//  <copyright file="InStorMat.generated.cs" company="longquan.gongan">
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


namespace longquan.gongan.InStor.Entities
{
    /// <summary>
    /// 实体类：资产入库信息
    /// </summary>
    [Description("资产入库信息")]
    [TableNamePrefix("InStor")]
    public partial class InStorMat : EntityBase<int>, ISoftDeletable, ICreationAudited<int>, IUpdateAudited<int>
    {
        /// <summary>
        /// 获取或设置 国标大类
        /// </summary>
        [DisplayName("国标大类")]
        public string BigType { get; set; }

        /// <summary>
        /// 获取或设置 资产名称
        /// </summary>
        [DisplayName("资产名称")]
        public string MatName { get; set; }

        /// <summary>
        /// 获取或设置 入账日期
        /// </summary>
        [DisplayName("入账日期")]
        public DateTime InaccountDate { get; set; }

        /// <summary>
        /// 获取或设置 获取方式
        /// </summary>
        [DisplayName("获取方式")]
        public string GetMethod { get; set; }

        /// <summary>
        /// 获取或设置 使用状况
        /// </summary>
        [DisplayName("使用状况")]
        public string Usage { get; set; }

        /// <summary>
        /// 获取或设置 价值类型
        /// </summary>
        [DisplayName("价值类型")]
        public string ValueType { get; set; }

        /// <summary>
        /// 获取或设置 其他5
        /// </summary>
        [DisplayName("其他5")]
        public string Other5 { get; set; }

        /// <summary>
        /// 获取或设置 入库价格
        /// </summary>
        [DisplayName("入库价格")]
        public double InPrice { get; set; }

        /// <summary>
        /// 获取或设置 其他4
        /// </summary>
        [DisplayName("其他4")]
        public string Other4 { get; set; }

        /// <summary>
        /// 获取或设置 取得日期
        /// </summary>
        [DisplayName("取得日期")]
        public DateTime GetDate { get; set; }

        /// <summary>
        /// 获取或设置 管理部门编码
        /// </summary>
        [DisplayName("管理部门编码")]
        public string Managerdepartment { get; set; }

        /// <summary>
        /// 获取或设置 使用人员编码
        /// </summary>
        [DisplayName("使用人员编码")]
        public string UserNo { get; set; }

        /// <summary>
        /// 获取或设置 使用部门编码
        /// </summary>
        [DisplayName("使用部门编码")]
        public string Userdepartment { get; set; }

        /// <summary>
        /// 获取或设置 仓库名称
        /// </summary>
        [DisplayName("仓库名称")]
        public string StoreName { get; set; }

        /// <summary>
        /// 获取或设置 销售商
        /// </summary>
        [DisplayName("销售商")]
        public string SupName { get; set; }

        /// <summary>
        /// 获取或设置 质保期
        /// </summary>
        [DisplayName("质保期")]
        public DateTime WarrantyPeriod { get; set; }

        /// <summary>
        /// 获取或设置 其他
        /// </summary>
        [DisplayName("其他")]
        public string Other { get; set; }

        /// <summary>
        /// 获取或设置 入库数量
        /// </summary>
        [DisplayName("入库数量")]
        public double In_Num { get; set; }

        /// <summary>
        /// 获取或设置 用途
        /// </summary>
        [DisplayName("用途")]
        public string Purpose { get; set; }

        /// <summary>
        /// 获取或设置 当前数量
        /// </summary>
        [DisplayName("当前数量")]
        public double CurrNum { get; set; }

        /// <summary>
        /// 获取或设置 生产日期
        /// </summary>
        [DisplayName("生产日期")]
        public DateTime ManufactureDate { get; set; }

        /// <summary>
        /// 获取或设置 其他2
        /// </summary>
        [DisplayName("其他2")]
        public string Other2 { get; set; }

        /// <summary>
        /// 获取或设置 资产分类
        /// </summary>
        [DisplayName("资产分类")]
        public string MatType { get; set; }

        /// <summary>
        /// 获取或设置 规格型号
        /// </summary>
        [DisplayName("规格型号")]
        public string Model { get; set; }

        /// <summary>
        /// 获取或设置 所属单位
        /// </summary>
        [DisplayName("所属单位")]
        public string Company { get; set; }

        /// <summary>
        /// 获取或设置 安全库存
        /// </summary>
        [DisplayName("安全库存")]
        public double SafeNum { get; set; }

        /// <summary>
        /// 获取或设置 备注
        /// </summary>
        [DisplayName("备注")]
        public string Remark { get; set; }

        /// <summary>
        /// 获取或设置 质保期2
        /// </summary>
        [DisplayName("质保期2")]
        public double WarrantyPeriod2 { get; set; }

        /// <summary>
        /// 获取或设置 批次号
        /// </summary>
        [DisplayName("批次号")]
        public string Batch { get; set; }

        /// <summary>
        /// 获取或设置 品牌
        /// </summary>
        [DisplayName("品牌")]
        public string Brand { get; set; }

        /// <summary>
        /// 获取或设置 资产编码
        /// </summary>
        [DisplayName("资产编码")]
        public string MatNo { get; set; }

        /// <summary>
        /// 获取或设置 其他3
        /// </summary>
        [DisplayName("其他3")]
        public string Other3 { get; set; }

        /// <summary>
        /// 获取或设置 删除时间
        /// </summary>
        [DisplayName("删除时间")]
        public DateTime? DeletedTime { get; set; }

        /// <summary>
        /// 获取或设置 创建者
        /// </summary>
        [DisplayName("创建者")]
        public int? CreatorId { get; set; }

        /// <summary>
        /// 获取或设置 创建时间
        /// </summary>
        [DisplayName("创建时间")]
        public DateTime CreatedTime { get; set; }

        /// <summary>
        /// 获取或设置 更新者
        /// </summary>
        [DisplayName("更新者")]
        public int? LastUpdaterId { get; set; }

        /// <summary>
        /// 获取或设置 更新时间
        /// </summary>
        [DisplayName("更新时间")]
        public DateTime? LastUpdatedTime { get; set; }

    }
}

