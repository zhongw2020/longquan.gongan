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
import { BaseKindComponent } from './base-kind/base-kind.component';
import { BaseMatComponent } from './base-mat/base-mat.component';
import { BaseSupComponent } from './base-sup/base-sup.component';

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
    BaseKindComponent,
    BaseMatComponent,
    BaseSupComponent,
  ]
})
export class BaseDataModule { }
