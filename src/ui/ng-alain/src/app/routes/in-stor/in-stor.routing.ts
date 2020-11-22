// -----------------------------------------------------------------------
//  <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//  </once-generated>
//
//  <copyright file="in-stor.routing.ts" company="longquan.gongan">
//      longquan.gongan
//  </copyright>
//  <site>http://longquan.gongan</site>
//  <last-editor>longquan.gongan</last-editor>
// -----------------------------------------------------------------------

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ACLGuard } from '@delon/acl';
import { InStorMatComponent } from './in-stor-mat/in-stor-mat.component';

const routes: Routes = [
  { path: 'in-stor-mat', component: InStorMatComponent, canActivate: [ACLGuard], data: { title: '资产入库管理', reuse: true, guard: 'Root.Admin.InStor.InStorMat.Read' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InStorRoutingModule { }
