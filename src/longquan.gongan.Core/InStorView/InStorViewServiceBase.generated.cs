// -----------------------------------------------------------------------
// <auto-generated>
//    此代码由代码生成器生成。
//    手动更改此文件可能导致应用程序出现意外的行为。
//    如果重新生成代码，对此文件的任何修改都会丢失。
//    如果需要扩展此类，请在控制器类型 InStorViewService 进行继承重写
// </auto-generated>
//
//  <copyright file="IInStorViewServiceBase.generated.cs" company="longquan.gongan">
//      longquan.gongan
//  </copyright>
//  <site>http://longquan.gongan</site>
//  <last-editor>longquan.gongan</last-editor>
// -----------------------------------------------------------------------

using System;
using System.Linq;
using System.Threading.Tasks;

using OSharp.Core.Systems;
using OSharp.Data;
using OSharp.Entity;
using OSharp.EventBuses;
using OSharp.Extensions;
using OSharp.Identity;

using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

using longquan.gongan.InStorView.Dtos;
using longquan.gongan.InStorView.Entities;


namespace longquan.gongan.InStorView
{
    /// <summary>
    /// 业务实现基类：模块
    /// </summary>
    public abstract partial class InStorViewServiceBase : IInStorViewContract
    {
        /// <summary>
        /// 初始化一个<see cref="InStorViewService"/>类型的新实例
        /// </summary>
        protected InStorViewServiceBase(IServiceProvider provider)
        {
            ServiceProvider = provider;
            Logger = provider.GetLogger(GetType());
        }
    
        #region 属性

        /// <summary>
        /// 获取或设置 服务提供者对象
        /// </summary>
        protected IServiceProvider ServiceProvider { get; }

        /// <summary>
        /// 获取或设置 日志对象
        /// </summary>
        protected ILogger Logger { get; }

        /// <summary>
        /// 获取或设置 资产入库视图信息仓储对象
        /// </summary>
        protected IRepository<InStorMatView, int> InStorMatViewRepository => ServiceProvider.GetService<IRepository<InStorMatView, int>>();
        
        /// <summary>
        /// 获取 事件总线
        /// </summary>
        protected IEventBus EventBus => ServiceProvider.GetService<IEventBus>();

        /// <summary>
        /// 获取 设置存储对象
        /// </summary>
        protected IKeyValueStore KeyValueStore => ServiceProvider.GetService<IKeyValueStore>();

        #endregion
    }
}
