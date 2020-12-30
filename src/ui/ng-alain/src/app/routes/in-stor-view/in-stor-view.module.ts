// -----------------------------------------------------------------------
//  <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//  </once-generated>
//
//  <copyright file="in-stor-view.module.ts" company="longquan.gongan">
//      longquan.gongan
//  </copyright>
//  <site>http://longquan.gongan</site>
//  <last-editor>longquan.gongan</last-editor>
// -----------------------------------------------------------------------

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared';
import { InStorViewRoutingModule } from './in-stor-view.routing';
import { InStorMatViewComponent } from './in-stor-mat-view/in-stor-mat-view.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    InStorViewRoutingModule
  ],
  declarations: [
    InStorMatViewComponent,
  ]
})
export class InStorViewModule { }
