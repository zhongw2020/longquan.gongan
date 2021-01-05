// -----------------------------------------------------------------------
//  <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//  </once-generated>
//
//  <copyright file="report.routing.ts" company="longquan.gongan">
//      longquan.gongan
//  </copyright>
//  <site>http://longquan.gongan</site>
//  <last-editor>longquan.gongan</last-editor>
// -----------------------------------------------------------------------

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ACLGuard } from '@delon/acl';
import { DateWarnComponent } from './date-warn/date-warn.component';
import { StoreWarnComponent } from './store-warn/store-warn.component';
import { StoreSumComponent } from './store-sum/store-sum.component';

const routes: Routes = [
  { path: 'date-warn', component: DateWarnComponent, canActivate: [ACLGuard], data: { title: '质保期告警', reuse: true, guard: 'Root.Admin.Report.DateWarn.Read' } },
  { path: 'store-warn', component: StoreWarnComponent, canActivate: [ACLGuard], data: { title: '库存量告警', reuse: true, guard: 'Root.Admin.Report.StoreWarn.Read' } },
  { path: 'store-sum', component: StoreSumComponent, canActivate: [ACLGuard], data: { title: '库存盘点', reuse: true, guard: 'Root.Admin.Report.StoreSum.Read' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
