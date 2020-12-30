// -----------------------------------------------------------------------
//  <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//  </once-generated>
//
//  <copyright file="in-stor.routing.ts" company="longquan.gongan">
//      longquan.gongan
//  </copyright>
//  <site>http://longquan.gongan</site>
//  <last-editor>longquan.gongan</last-editor>
// -----------------------------------------------------------------------

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ACLGuard } from '@delon/acl';
import { InStorMatComponent } from './in-stor-mat/in-stor-mat.component';
import { InStorBackComponent } from './in-stor-back/in-stor-back.component';
import { OutStorBackComponent } from './out-stor-back/out-stor-back.component';

const routes: Routes = [
  { path: 'in-stor-mat', component: InStorMatComponent, canActivate: [ACLGuard], data: { title: '采购入库', reuse: true, guard: 'Root.Admin.InStor.InStorMat.Read' } },
  { path: 'in-stor-back', component: InStorBackComponent, canActivate: [ACLGuard], data: { title: '采购退库', reuse: true, guard: 'Root.Admin.InStor.InStorMat.Read' } },
  { path: 'out-stor-back', component: OutStorBackComponent, canActivate: [ACLGuard], data: { title: '领用退库', reuse: true, guard: 'Root.Admin.OutStor.AssetCollection.Read' } },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InStorRoutingModule { }
