// -----------------------------------------------------------------------
// <auto-generated>
//    此代码由代码生成器生成。
//    手动更改此文件可能导致应用程序出现意外的行为。
//    如果重新生成代码，对此文件的任何修改都会丢失。
//    如果需要扩展此类：可遵守如下规则进行扩展：
//      1.横向扩展：如需添加额外的属性，可新建文件“InStorMatOutputDto.cs”的分部类“public partial class InStorMatOutputDto”}添加属性
// </auto-generated>
//
//  <copyright file="InStorMatOutputDto.generated.cs" company="longquan.gongan">
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
using longquan.gongan.InStor.Entities;

namespace longquan.gongan.InStor.Dtos
{
    /// <summary>
    /// 输入DTO：资产入库信息
    /// </summary>
    [MapFrom(typeof(InStorMat))]
    [Description("资产入库信息")]
    public partial class InStorMatOutputDto : IOutputDto, IDataAuthEnabled
    {
        /// <summary>
        /// 初始化一个<see cref="InStorMatOutputDto"/>类型的新实例
        /// </summary>
        public InStorMatOutputDto()
        { }

        /// <summary>
        /// 初始化一个<see cref="InStorMatOutputDto"/>类型的新实例
        /// </summary>
        public InStorMatOutputDto(InStorMat entity)
        {
            Id = entity.Id;
            InVoucher = entity.InVoucher;
            MatNo = entity.MatNo;
            InaccountDate = entity.InaccountDate;
            ValueType = entity.ValueType;
            InPrice = entity.InPrice;
            GetMethod = entity.GetMethod;
            GetDate = entity.GetDate;
            Usage = entity.Usage;
            ManagerdepartmentNo = entity.ManagerdepartmentNo;
            UserdepartmentNo = entity.UserdepartmentNo;
            UserNo = entity.UserNo;
            Purpose = entity.Purpose;
            Company = entity.Company;
            StoreNo = entity.StoreNo;
            SupNo = entity.SupNo;
            Remark = entity.Remark;
            Other = entity.Other;
            Curr_Num = entity.Curr_Num;
            In_Num = entity.In_Num;
            WarrantyPeriod = entity.WarrantyPeriod;
            ManufactureDate = entity.ManufactureDate;
            CreatorId = entity.CreatorId;
            CreatedTime = entity.CreatedTime;
            LastUpdaterId = entity.LastUpdaterId;
            LastUpdatedTime = entity.LastUpdatedTime;
        }

        /// <summary>
        /// 获取或设置 编号
        /// </summary>
        [DisplayName("编号")]
        public int Id { get; set; }

        /// <summary>
        /// 获取或设置 入库凭证号
        /// </summary>
        [DisplayName("入库凭证号")]
        public string InVoucher { get; set; }

        /// <summary>
        /// 获取或设置 资产编号
        /// </summary>
        [DisplayName("资产编号")]
        public string MatNo { get; set; }

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
        /// 获取或设置 管理部门编码
        /// </summary>
        [DisplayName("管理部门编码")]
        public string ManagerdepartmentNo { get; set; }

        /// <summary>
        /// 获取或设置 使用部门编码
        /// </summary>
        [DisplayName("使用部门编码")]
        public string UserdepartmentNo { get; set; }

        /// <summary>
        /// 获取或设置 使用人员编码
        /// </summary>
        [DisplayName("使用人员编码")]
        public string UserNo { get; set; }

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
        /// 获取或设置 仓库编码
        /// </summary>
        [DisplayName("仓库编码")]
        public string StoreNo { get; set; }

        /// <summary>
        /// 获取或设置 销售商编码
        /// </summary>
        [DisplayName("销售商编码")]
        public string SupNo { get; set; }

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
