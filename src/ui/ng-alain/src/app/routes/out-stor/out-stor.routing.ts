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

const routes: Routes = [
  { path: 'asset-collection', component: AssetCollectionComponent, canActivate: [ACLGuard], data: { title: '资产领用管理', reuse: true, guard: 'Root.Admin.OutStor.AssetCollection.Read' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutStorRoutingModule { }
