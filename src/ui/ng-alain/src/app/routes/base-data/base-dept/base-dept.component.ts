// ------------------------------------------------------------------------------
//  <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//  </once-generated>
//
//  <copyright file="base-dept.module.ts" company="longquan.gongan">
//      longquan.gongan
//  </copyright>
//  <site>http://longquan.gongan</site>
//  <last-editor>longquan.gongan</last-editor>
// -----------------------------------------------------------------------

import { Component, OnInit, Injector } from '@angular/core';
import { SFUISchema, SFSchema } from '@delon/form';
import { OsharpSTColumn } from '@shared/osharp/services/alain.types';
import { STComponentBase } from '@shared/osharp/components/st-component-base';
import { XlsxService } from '@delon/abc/xlsx';
import { map, tap } from 'rxjs/operators';
@Component({
  selector: 'app-base-dept',
  templateUrl: './base-dept.component.html',
  styles: []
})
export class BaseDeptComponent extends STComponentBase implements OnInit {

  constructor(injector: Injector, private xlsx: XlsxService) {
    super(injector);
    this.moduleName = 'baseDept';
  }

  ngOnInit() {
    super.InitBase();
  }

  protected GetSTColumns(): OsharpSTColumn[] {
    let columns: OsharpSTColumn[] = [
      {
        title: '操作', fixed: 'left', width: 65, buttons: [{
          text: '操作', children: [
            { text: '编辑', icon: 'edit', acl: 'Root.Admin.BaseData.BaseDept.Update', click: row => this.edit(row) },
            { text: '删除', icon: 'delete', type: 'del', acl: 'Root.Admin.BaseData.BaseDept.Delete', click: row => this.delete(row) },
          ]
        }]
      },
      { title: '编号', index: 'Id', sort: true, readOnly: true, editable: true, filterable: true, ftype: 'number' },
      { title: '部门名称', index: 'Name', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '部门负责人', index: 'Manager', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '部门状态', index: 'State', sort: true, editable: true, filterable: true, type: 'yn' },
      { title: '其他', index: 'Other', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '创建时间', index: 'CreatedTime', sort: true, filterable: true, type: 'date' },
    ];
    return columns;
  }

  protected GetSFUISchema(): SFUISchema {
    let ui: SFUISchema = {
      '*': { spanLabelFixed: 100, grid: { span: 12 } },
      $Name: { grid: { span: 24 } },
      $Manager: { grid: { span: 24 } },
      $Other: { grid: { span: 24 } }
    };
    return ui;
  }

  export(): void {
    const data = [this.columns.map(i => i.title)];
    this.data.forEach(i => data.push(this.columns.map(c => i[c.index as string])));
    this.xlsx.export({
      sheets: [
        {
          data,
          name: 'sheet name',
        },
      ],
    });
  }
}

