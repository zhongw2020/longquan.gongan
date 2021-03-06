// -----------------------------------------------------------------------
// <auto-generated>
//    此代码由代码生成器生成。
//    手动更改此文件可能导致应用程序出现意外的行为。
//    如果重新生成代码，对此文件的任何修改都会丢失。
//    如果需要扩展此类，可以遵守如下规则进行扩展：
//      1.横向扩展：如需给当前实体 BaseStaff 添加方法，可新建文件“BaseDataServiceBase.BaseStaff.cs”的分部类“public abstract partial class BaseDataServiceBase”添加功能
//      2.纵向扩展：如需要重写当前实体 BaseStaff 的业务实现，可新建文件“BaseDataService.BaseStaff.cs”的分部类“public partial class BaseDataService”对现有方法进行方法重写实现
// </auto-generated>
//
//  <copyright file="BaseDataServiceBase.BaseStaff.generated.cs" company="longquan.gongan">
//      longquan.gongan
//  </copyright>
//  <site>http://longquan.gongan</site>
//  <last-editor>longquan.gongan</last-editor>
// -----------------------------------------------------------------------

using System;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

using OSharp.Data;
using OSharp.Dependency;
using OSharp.Extensions;
using OSharp.Mapping;

using longquan.gongan.BaseData.Dtos;
using longquan.gongan.BaseData.Entities;


namespace longquan.gongan.BaseData
{
    public abstract partial class BaseDataServiceBase
    {
        /// <summary>
        /// 获取 人员数据信息查询数据集
        /// </summary>
        public IQueryable<BaseStaff> BaseStaffs
        {
            get { return BaseStaffRepository.QueryAsNoTracking(); }
        }

        /// <summary>
        /// 检查人员数据信息是否存在
        /// </summary>
        /// <param name="predicate">检查谓语表达式</param>
        /// <param name="id">更新的人员数据信息编号</param>
        /// <returns>人员数据信息是否存在</returns>
        public virtual Task<bool> CheckBaseStaffExists(Expression<Func<BaseStaff, bool>> predicate, int id = default(int))
        {
            return BaseStaffRepository.CheckExistsAsync(predicate, id);
        }
        
        /// <summary>
        /// 添加人员数据信息
        /// </summary>
        /// <param name="dtos">要添加的人员数据信息DTO信息</param>
        /// <returns>业务操作结果</returns>
        public virtual Task<OperationResult> CreateBaseStaffs(params BaseStaffInputDto[] dtos)
        {
            Check.Validate<BaseStaffInputDto, int>(dtos, nameof(dtos));
            return BaseStaffRepository.InsertAsync(dtos);
        }
        
        /// <summary>
        /// 更新人员数据信息
        /// </summary>
        /// <param name="dtos">包含更新信息的人员数据信息DTO信息</param>
        /// <returns>业务操作结果</returns>
        public virtual Task<OperationResult> UpdateBaseStaffs(params BaseStaffInputDto[] dtos)
        {
            Check.Validate<BaseStaffInputDto, int>(dtos, nameof(dtos));
            return BaseStaffRepository.UpdateAsync(dtos);
        }
        
        /// <summary>
        /// 删除人员数据信息
        /// </summary>
        /// <param name="ids">要删除的人员数据信息编号</param>
        /// <returns>业务操作结果</returns>
        public virtual Task<OperationResult> DeleteBaseStaffs(params int[] ids)
        {
            Check.NotNull(ids, nameof(ids));
            return BaseStaffRepository.DeleteAsync(ids);
        }
    }
}
