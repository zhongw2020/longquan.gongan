// -----------------------------------------------------------------------
//  <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//  </once-generated>
//
//  <copyright file="report.module.ts" company="longquan.gongan">
//      longquan.gongan
//  </copyright>
//  <site>http://longquan.gongan</site>
//  <last-editor>longquan.gongan</last-editor>
// -----------------------------------------------------------------------

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared';
import { ReportRoutingModule } from './report.routing';
import { DateWarnComponent } from './date-warn/date-warn.component';
import { StoreWarnComponent } from './store-warn/store-warn.component';
import { StoreSumComponent } from './store-sum/store-sum.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReportRoutingModule
  ],
  declarations: [
    DateWarnComponent,
    StoreWarnComponent,
    StoreSumComponent,
  ]
})
export class ReportModule { }
