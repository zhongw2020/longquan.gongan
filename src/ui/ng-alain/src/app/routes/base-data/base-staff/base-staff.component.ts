// ------------------------------------------------------------------------------
//  <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//  </once-generated>
//
//  <copyright file="base-staff.module.ts" company="longquan.gongan">
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
  selector: 'app-base-staff',
  templateUrl: './base-staff.component.html',
  styles: []
})
export class BaseStaffComponent extends STComponentBase implements OnInit {

  constructor(injector: Injector) {
    super(injector);
    this.moduleName = 'baseStaff';
  }

  ngOnInit() {
    super.InitBase();
  }

  protected GetSTColumns(): OsharpSTColumn[] {
    let columns: OsharpSTColumn[] = [
      {
        title: '操作', fixed: 'left', width: 65, buttons: [{
          text: '操作', children: [
            { text: '编辑', icon: 'edit', acl: 'Root.Admin.BaseData.BaseStaff.Update', click: row => this.edit(row) },
            { text: '删除', icon: 'delete', type: 'del', acl: 'Root.Admin.BaseData.BaseStaff.Delete', click: row => this.delete(row) },
          ]
        }]
      },
      { title: '编号', index: 'Id', sort: true, readOnly: true, editable: true, filterable: true, ftype: 'number' },
      { title: '人员姓名', index: 'Name', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '性别', index: 'Sex', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '科室', index: 'Dept', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '警号', index: 'No', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '人员状态', index: 'State', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '其他', index: 'Other', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '创建时间', index: 'CreatedTime', sort: true, filterable: true, type: 'date' },
    ];
    return columns;
  }

  protected GetSFUISchema(): SFUISchema {
    let ui: SFUISchema = {
      '*': { spanLabelFixed: 100, grid: { span: 12 } },
      $Name: { grid: { span: 24 } },
      $Sex: { grid: { span: 24 } },
      $Dept: { grid: { span: 24 } },
      $No: { grid: { span: 24 } },
      $State: { grid: { span: 24 } },
      $Other: { grid: { span: 24 } }
    };
    return ui;
  }
}

