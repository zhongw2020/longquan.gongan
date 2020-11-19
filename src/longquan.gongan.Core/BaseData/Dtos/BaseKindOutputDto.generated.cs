// -----------------------------------------------------------------------
// <auto-generated>
//    此代码由代码生成器生成。
//    手动更改此文件可能导致应用程序出现意外的行为。
//    如果重新生成代码，对此文件的任何修改都会丢失。
//    如果需要扩展此类：可遵守如下规则进行扩展：
//      1.横向扩展：如需添加额外的属性，可新建文件“BaseKindOutputDto.cs”的分部类“public partial class BaseKindOutputDto”}添加属性
// </auto-generated>
//
//  <copyright file="BaseKindOutputDto.generated.cs" company="longquan.gongan">
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

using longquan.gongan.BaseData.Entities;

namespace longquan.gongan.BaseData.Dtos
{
    /// <summary>
    /// 输入DTO：分类数据信息
    /// </summary>
    [MapFrom(typeof(BaseKind))]
    [Description("分类数据信息")]
    public partial class BaseKindOutputDto : IOutputDto
    {
        /// <summary>
        /// 初始化一个<see cref="BaseKindOutputDto"/>类型的新实例
        /// </summary>
        public BaseKindOutputDto()
        { }

        /// <summary>
        /// 初始化一个<see cref="BaseKindOutputDto"/>类型的新实例
        /// </summary>
        public BaseKindOutputDto(BaseKind entity)
        {
            Id = entity.Id;
            Name = entity.Name;
            State = entity.State;
            Other = entity.Other;
            CreatedTime = entity.CreatedTime;
        }

        /// <summary>
        /// 获取或设置 编号
        /// </summary>
        [DisplayName("编号")]
        public int Id { get; set; }

        /// <summary>
        /// 获取或设置 分类名称
        /// </summary>
        [DisplayName("分类名称")]
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
        /// 获取或设置 创建时间
        /// </summary>
        [DisplayName("创建时间")]
        public DateTime CreatedTime { get; set; }

    }
}
