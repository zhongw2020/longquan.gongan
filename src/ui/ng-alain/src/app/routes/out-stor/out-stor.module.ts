// -----------------------------------------------------------------------
//  <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//  </once-generated>
//
//  <copyright file="out-stor.module.ts" company="longquan.gongan">
//      longquan.gongan
//  </copyright>
//  <site>http://longquan.gongan</site>
//  <last-editor>longquan.gongan</last-editor>
// -----------------------------------------------------------------------

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared';
import { OutStorRoutingModule } from './out-stor.routing';
import { AssetCollectionComponent } from './asset-collection/asset-collection.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    OutStorRoutingModule
  ],
  declarations: [
    AssetCollectionComponent,
  ]
})
export class OutStorModule { }
