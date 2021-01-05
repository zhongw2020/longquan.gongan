// -----------------------------------------------------------------------
//  <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//  </once-generated>
//
//  <copyright file="all-report.routing.ts" company="longquan.gongan">
//      longquan.gongan
//  </copyright>
//  <site>http://longquan.gongan</site>
//  <last-editor>longquan.gongan</last-editor>
// -----------------------------------------------------------------------

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ACLGuard } from '@delon/acl';
import { StorWarnComponent } from './stor-warn/stor-warn.component';

const routes: Routes = [
  { path: 'stor-warn', component: StorWarnComponent, canActivate: [ACLGuard], data: { title: '库存量告警管理', reuse: true, guard: 'Root.Admin.AllReport.StorWarn.Read' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllReportRoutingModule { }
