// -----------------------------------------------------------------------
// <auto-generated>
//    此代码由代码生成器生成。
//    手动更改此文件可能导致应用程序出现意外的行为。
//    如果重新生成代码，对此文件的任何修改都会丢失。
//    如果需要扩展此类，请在控制器类型 InStorService 进行继承重写
// </auto-generated>
//
//  <copyright file="IInStorServiceBase.generated.cs" company="longquan.gongan">
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

using longquan.gongan.InStor.Dtos;
using longquan.gongan.InStor.Entities;


namespace longquan.gongan.InStor
{
    /// <summary>
    /// 业务实现基类：模块
    /// </summary>
    public abstract partial class InStorServiceBase : IInStorContract
    {
        /// <summary>
        /// 初始化一个<see cref="InStorService"/>类型的新实例
        /// </summary>
        protected InStorServiceBase(IServiceProvider provider)
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
        /// 获取或设置 资产入库信息仓储对象
        /// </summary>
        protected IRepository<InStorMat, int> InStorMatRepository => ServiceProvider.GetService<IRepository<InStorMat, int>>();
        
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
