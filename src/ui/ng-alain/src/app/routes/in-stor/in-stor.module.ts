// -----------------------------------------------------------------------
//  <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//  </once-generated>
//
//  <copyright file="in-stor.module.ts" company="longquan.gongan">
//      longquan.gongan
//  </copyright>
//  <site>http://longquan.gongan</site>
//  <last-editor>longquan.gongan</last-editor>
// -----------------------------------------------------------------------

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared';
import { InStorRoutingModule } from './in-stor.routing';
import { InStorMatComponent } from './in-stor-mat/in-stor-mat.component';
import { InStorBackComponent } from './in-stor-back/in-stor-back.component';
import { OutStorBackComponent } from './out-stor-back/out-stor-back.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    InStorRoutingModule
  ],
  declarations: [
    InStorMatComponent,
    InStorBackComponent,
    OutStorBackComponent,
  ]
})
export class InStorModule { }
