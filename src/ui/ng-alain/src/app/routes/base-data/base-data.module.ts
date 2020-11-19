// -----------------------------------------------------------------------
//  <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//  </once-generated>
//
//  <copyright file="base-data.module.ts" company="longquan.gongan">
//      longquan.gongan
//  </copyright>
//  <site>http://longquan.gongan</site>
//  <last-editor>longquan.gongan</last-editor>
// -----------------------------------------------------------------------

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared';
import { BaseDataRoutingModule } from './base-data.routing';
import { BaseStaffComponent } from './base-staff/base-staff.component';
import { BaseDeptComponent } from './base-dept/base-dept.component';
import { BaseStoreComponent } from './base-store/base-store.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BaseDataRoutingModule
  ],
  declarations: [
    BaseStaffComponent,
    BaseDeptComponent,
    BaseStoreComponent,
  ]
})
export class BaseDataModule { }
