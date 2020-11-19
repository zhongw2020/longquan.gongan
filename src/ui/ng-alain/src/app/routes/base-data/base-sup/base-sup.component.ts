// ------------------------------------------------------------------------------
//  <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//  </once-generated>
//
//  <copyright file="base-sup.module.ts" company="longquan.gongan">
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
  selector: 'app-base-sup',
  templateUrl: './base-sup.component.html',
  styles: []
})
export class BaseSupComponent extends STComponentBase implements OnInit {

  constructor(injector: Injector) {
    super(injector);
    this.moduleName = 'baseSup';
  }

  ngOnInit() {
    super.InitBase();
  }

  protected GetSTColumns(): OsharpSTColumn[] {
    let columns: OsharpSTColumn[] = [
      {
        title: '操作', fixed: 'left', width: 65, buttons: [{
          text: '操作', children: [
            { text: '编辑', icon: 'edit', acl: 'Root.Admin.BaseData.BaseSup.Update', click: row => this.edit(row) },
            { text: '删除', icon: 'delete', type: 'del', acl: 'Root.Admin.BaseData.BaseSup.Delete', click: row => this.delete(row) },
          ]
        }]
      },
      { title: '编号', index: 'Id', sort: true, readOnly: true, editable: true, filterable: true, ftype: 'number' },
      { title: '供应商名称', index: 'Name', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '状态', index: 'State', sort: true, editable: true, filterable: true, type: 'yn' },
      { title: '其他', index: 'Other', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '创建时间', index: 'CreatedTime', sort: true, filterable: true, type: 'date' },
    ];
    return columns;
  }

  protected GetSFUISchema(): SFUISchema {
    let ui: SFUISchema = {
      '*': { spanLabelFixed: 100, grid: { span: 12 } },
      $Name: { grid: { span: 24 } },
      $Other: { grid: { span: 24 } }
    };
    return ui;
  }
}

