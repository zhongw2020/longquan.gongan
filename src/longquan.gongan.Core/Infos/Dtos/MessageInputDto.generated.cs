// -----------------------------------------------------------------------
// <auto-generated>
//    此代码由代码生成器生成。
//    手动更改此文件可能导致应用程序出现意外的行为。
//    如果重新生成代码，对此文件的任何修改都会丢失。
//    如果需要扩展此类：可遵守如下规则进行扩展：
//      1.横向扩展：如需添加额外的属性，可新建文件“MessageInputDto.cs”的分部类“public partial class MessageInputDto”}添加属性
// </auto-generated>
//
//  <copyright file="MessageInputDto.generated.cs" company="OSharp开源团队">
//      Copyright (c) 2014-2019 Liuliu. All rights reserved.
//  </copyright>
//  <site>https://www.osharp.org</site>
//  <last-editor>郭明锋</last-editor>
// -----------------------------------------------------------------------

using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

using OSharp.Entity;
using OSharp.Mapping;

using longquan.gongan.Infos.Entities;


namespace longquan.gongan.Infos.Dtos
{
    /// <summary>
    /// 输入DTO：站内信信息
    /// </summary>
    [MapTo(typeof(Message))]
    [Description("站内信信息")]
    public partial class MessageInputDto : IInputDto<Guid>
    {
        /// <summary>
        /// 获取或设置 编号
        /// </summary>
        [DisplayName("编号")]
        public Guid Id { get; set; }

        /// <summary>
        /// 获取或设置 标题
        /// </summary>
        [DisplayName("标题"), Required]
        public string Title { get; set; }

        /// <summary>
        /// 获取或设置 内容
        /// </summary>
        [DisplayName("内容"), Required]
        public string Content { get; set; }

        /// <summary>
        /// 获取或设置 消息类型
        /// </summary>
        [DisplayName("消息类型")]
        public MessageType MessageType { get; set; }

        /// <summary>
        /// 获取或设置 是否发送
        /// </summary>
        [DisplayName("是否发送")]
        public bool IsSended { get; set; }

        /// <summary>
        /// 获取或设置 是否允许回复
        /// </summary>
        [DisplayName("是否允许回复")]
        public bool CanReply { get; set; }

        /// <summary>
        /// 获取或设置 生效时间
        /// </summary>
        [DisplayName("生效时间")]
        public DateTime? BeginDate { get; set; }

        /// <summary>
        /// 获取或设置 过期时间
        /// </summary>
        [DisplayName("过期时间")]
        public DateTime? EndDate { get; set; }

        /// <summary>
        /// 获取或设置 发送人编号
        /// </summary>
        [DisplayName("发送人编号")]
        public int SenderId { get; set; }

        /// <summary>
        /// 获取或设置 是否锁定
        /// </summary>
        [DisplayName("是否锁定")]
        public bool IsLocked { get; set; }

    }
}
