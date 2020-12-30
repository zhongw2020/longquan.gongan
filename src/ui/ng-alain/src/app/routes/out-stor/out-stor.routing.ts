// -----------------------------------------------------------------------
//  <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//  </once-generated>
//
//  <copyright file="out-stor.routing.ts" company="longquan.gongan">
//      longquan.gongan
//  </copyright>
//  <site>http://longquan.gongan</site>
//  <last-editor>longquan.gongan</last-editor>
// -----------------------------------------------------------------------

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ACLGuard } from '@delon/acl';
import { AssetCollectionComponent } from './asset-collection/asset-collection.component';
import { AssetCollectionVComponent } from './asset-collection-v/asset-collection-v.component';
import { AllocationVComponent } from './allocation-v/allocation-v.component';
import { AllocationComponent } from './allocation/allocation.component';
import { ScrapComponent } from './scrap/scrap.component';
import { ScrapVComponent } from './scrap-v/scrap-v.component';


const routes: Routes = [
  { path: 'asset-collection', component: AssetCollectionComponent, canActivate: [ACLGuard], data: { title: '领用申请', reuse: true, guard: 'Root.Admin.OutStor.AssetCollection.Read' } },
  { path: 'asset-collection-v', component: AssetCollectionVComponent, canActivate: [ACLGuard], data: { title: '领用审核', reuse: true, guard: 'Root.Admin.OutStor.AssetCollection.Read' } },
  { path: 'allocation', component: AllocationVComponent, canActivate: [ACLGuard], data: { title: '调拨申请', reuse: true, guard: 'Root.Admin.OutStor.AssetCollection.Read' } },
  { path: 'allocation-v', component: AllocationComponent, canActivate: [ACLGuard], data: { title: '调拨审核', reuse: true, guard: 'Root.Admin.OutStor.AssetCollection.Read' } },
  { path: 'scrap', component: ScrapComponent, canActivate: [ACLGuard], data: { title: '报废申请', reuse: true, guard: 'Root.Admin.OutStor.AssetCollection.Read' } },
  { path: 'scrap-v', component: ScrapVComponent, canActivate: [ACLGuard], data: { title: '报废审核', reuse: true, guard: 'Root.Admin.OutStor.AssetCollection.Read' } },
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutStorRoutingModule { }
