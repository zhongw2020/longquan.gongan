// -----------------------------------------------------------------------
//  <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//  </once-generated>
//
//  <copyright file="in-stor-view.routing.ts" company="longquan.gongan">
//      longquan.gongan
//  </copyright>
//  <site>http://longquan.gongan</site>
//  <last-editor>longquan.gongan</last-editor>
// -----------------------------------------------------------------------

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ACLGuard } from '@delon/acl';
import { InStorMatViewComponent } from './in-stor-mat-view/in-stor-mat-view.component';

const routes: Routes = [
  { path: 'in-stor-mat-view', component: InStorMatViewComponent, canActivate: [ACLGuard], data: { title: '资产入库管理', reuse: true, guard: 'Root.Admin.InStorView.InStorMatView.Read' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InStorViewRoutingModule { }
