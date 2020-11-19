// -----------------------------------------------------------------------
//  <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//  </once-generated>
//
//  <copyright file="base-data.routing.ts" company="longquan.gongan">
//      longquan.gongan
//  </copyright>
//  <site>http://longquan.gongan</site>
//  <last-editor>longquan.gongan</last-editor>
// -----------------------------------------------------------------------

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ACLGuard } from '@delon/acl';
import { BaseStaffComponent } from './base-staff/base-staff.component';
import { BaseDeptComponent } from './base-dept/base-dept.component';
import { BaseStoreComponent } from './base-store/base-store.component';
import { BaseKindComponent } from './base-kind/base-kind.component';
import { BaseMatComponent } from './base-mat/base-mat.component';
import { BaseSupComponent } from './base-sup/base-sup.component';

const routes: Routes = [
  { path: 'base-staff', component: BaseStaffComponent, canActivate: [ACLGuard], data: { title: '人员数据管理', reuse: true, guard: 'Root.Admin.BaseData.BaseStaff.Read' } },
  { path: 'base-dept', component: BaseDeptComponent, canActivate: [ACLGuard], data: { title: '部门数据管理', reuse: true, guard: 'Root.Admin.BaseData.BaseDept.Read' } },
  { path: 'base-store', component: BaseStoreComponent, canActivate: [ACLGuard], data: { title: '仓库数据管理', reuse: true, guard: 'Root.Admin.BaseData.BaseStore.Read' } },
  { path: 'base-kind', component: BaseKindComponent, canActivate: [ACLGuard], data: { title: '人员数据管理', reuse: true, guard: 'Root.Admin.BaseData.BaseStaff.Read' } },
  { path: 'base-mat', component: BaseMatComponent, canActivate: [ACLGuard], data: { title: '部门数据管理', reuse: true, guard: 'Root.Admin.BaseData.BaseDept.Read' } },
  { path: 'base-sup', component: BaseSupComponent, canActivate: [ACLGuard], data: { title: '仓库数据管理', reuse: true, guard: 'Root.Admin.BaseData.BaseStore.Read' } },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseDataRoutingModule { }
