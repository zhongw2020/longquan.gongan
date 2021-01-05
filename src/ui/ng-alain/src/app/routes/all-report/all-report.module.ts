// -----------------------------------------------------------------------
//  <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//  </once-generated>
//
//  <copyright file="all-report.module.ts" company="longquan.gongan">
//      longquan.gongan
//  </copyright>
//  <site>http://longquan.gongan</site>
//  <last-editor>longquan.gongan</last-editor>
// -----------------------------------------------------------------------

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared';
import { AllReportRoutingModule } from './all-report.routing';
import { StorWarnComponent } from './stor-warn/stor-warn.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AllReportRoutingModule
  ],
  declarations: [
    StorWarnComponent,
  ]
})
export class AllReportModule { }
