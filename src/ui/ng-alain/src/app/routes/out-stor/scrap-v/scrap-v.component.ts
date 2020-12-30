// ------------------------------------------------------------------------------
//  <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//  </once-generated>
//
//  <copyright file="scrap.module.ts" company="longquan.gongan">
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
  selector: 'app-scrap',
  templateUrl: './scrap-v.component.html',
  styles: []
})
export class ScrapVComponent extends STComponentBase implements OnInit {

  constructor(injector: Injector) {
    super(injector);
    this.moduleName = 'scrap';
  }

  ngOnInit() {
    super.InitBase();
  }

  protected GetSTColumns(): OsharpSTColumn[] {
    let columns: OsharpSTColumn[] = [
     
      {
        title: '报废审核', fixed: 'left', width: 65, buttons: [{ text: '报废审核', icon: 'edit', acl: 'Root.Admin.OutStor.Scrap.Update', iif: row => !(row.VerifyState=="通过"), click: row => this.edit(row) }]
      },
     // { title: '编号', index: 'Id', sort: true, readOnly: true, editable: true, filterable: true, ftype: 'number' },
      { title: '资产编号', index: 'MatNo', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '报废日期', index: 'ScrapDate', sort: true, editable: true, filterable: true, type: 'date' },
      { title: '报废编号', index: 'ScrapNo', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '申请部门', index: 'Dept', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '审核状态', index: 'VerifyState', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '备注', index: 'Remark', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '资产名称', index: 'MatName', sort: true, editable: true, filterable: true, ftype: 'string' },
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
      required: ['MatNo']
    };
    return schema;
  }

  protected GetSFUISchema(): SFUISchema {
    let ui: SFUISchema = {
      '*': { spanLabelFixed: 100, grid: { span: 12 } },
      $MatNo: { grid: { span: 24 } },
      $ScrapNo: { grid: { span: 24 } },
      $Dept: { grid: { span: 24 } },
      $VerifyState: { grid: { span: 24 } },
      $Remark: { grid: { span: 24 } },
      $MatName: { grid: { span: 24 } }
    };
    return ui;
  }
}

