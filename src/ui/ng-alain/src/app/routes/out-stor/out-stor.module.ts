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
import { AllocationVComponent } from './allocation-v/allocation-v.component';
import { AssetCollectionVComponent } from './asset-collection-v/asset-collection-v.component';
import { AllocationComponent } from './allocation/allocation.component';
import { ScrapComponent } from './scrap/scrap.component';
import { ScrapVComponent } from './scrap-v/scrap-v.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    OutStorRoutingModule
  ],
  declarations: [
    AssetCollectionComponent,
    AssetCollectionVComponent,
    AllocationComponent,
    AllocationVComponent,
    ScrapVComponent,
    ScrapComponent,
  ]
})
export class OutStorModule { }
