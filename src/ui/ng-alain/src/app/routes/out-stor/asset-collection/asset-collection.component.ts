// ------------------------------------------------------------------------------
//  <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//  </once-generated>
//
//  <copyright file="asset-collection.module.ts" company="longquan.gongan">
//      longquan.gongan
//  </copyright>
//  <site>http://longquan.gongan</site>
//  <last-editor>longquan.gongan</last-editor>
// -----------------------------------------------------------------------

import { Component, OnInit, Injector } from '@angular/core';
import { SFUISchema, SFSchema } from '@delon/form';
import { OsharpSTColumn } from '@shared/osharp/services/alain.types';
import { STComponentBase } from '@shared/osharp/components/st-component-base';

@Component({
  selector: 'app-asset-collection',
  templateUrl: './asset-collection.component.html',
  styles: []
})
export class AssetCollectionComponent extends STComponentBase implements OnInit {

  constructor(injector: Injector) {
    super(injector);
    this.moduleName = 'assetCollection';
  }

  ngOnInit() {
    super.InitBase();
  }

  protected GetSTColumns(): OsharpSTColumn[] {
    let columns: OsharpSTColumn[] = [
      {
        title: '操作', fixed: 'left', width: 65, buttons: [{
          text: '操作', children: [
            { text: '编辑', icon: 'edit', acl: 'Root.Admin.OutStor.AssetCollection.Update', iif: row => row.Updatable, click: row => this.edit(row) },
            { text: '删除', icon: 'delete', type: 'del', acl: 'Root.Admin.OutStor.AssetCollection.Delete', iif: row => row.Deletable, click: row => this.delete(row) },
          ]
        }]
      },
      { title: '编号', index: 'Id', sort: true, readOnly: true, editable: true, filterable: true, ftype: 'number' },
      { title: '领用凭证', index: 'ColVoucher', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '领用部门编码', index: 'ColDeptno', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '领用人员编码', index: 'ColStaffno', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '领用物品编码', index: 'ColMatno', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '领用日期', index: 'ColDate', sort: true, editable: true, filterable: true, type: 'date' },
      { title: '领用数量', index: 'ColNumber', sort: true, editable: true, filterable: true, type: 'number' },
      { title: '备注', index: 'Remark', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '其他', index: 'Other', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '创建者', index: 'CreatorId', type: 'number' },
      { title: '创建时间', index: 'CreatedTime', sort: true, filterable: true, type: 'date' },
      { title: '更新者', index: 'LastUpdaterId', type: 'number' },
      { title: '更新时间', index: 'LastUpdatedTime', type: 'date' },
    ];
    return columns;
  }

  protected GetSFSchema(): SFSchema {
    let schema: SFSchema = {
      properties: this.ColumnsToSchemas(this.columns),
      required: ['ColVoucher']
    };
    return schema;
  }

  protected GetSFUISchema(): SFUISchema {
    let ui: SFUISchema = {
      '*': { spanLabelFixed: 100, grid: { span: 12 } },
      $ColVoucher: { grid: { span: 24 } },
      $ColDeptno: { grid: { span: 24 } },
      $ColStaffno: { grid: { span: 24 } },
      $ColMatno: { grid: { span: 24 } },
      $Remark: { grid: { span: 24 } },
      $Other: { grid: { span: 24 } }
    };
    return ui;
  }
}

