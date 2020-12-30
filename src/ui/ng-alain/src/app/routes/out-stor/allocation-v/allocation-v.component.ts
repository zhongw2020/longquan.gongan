// ------------------------------------------------------------------------------
//  <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//  </once-generated>
//
//  <copyright file="allocation.module.ts" company="longquan.gongan">
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
  selector: 'app-allocation',
  templateUrl: './allocation-v.component.html',
  styles: []
})
export class AllocationVComponent extends STComponentBase implements OnInit {

  constructor(injector: Injector) {
    super(injector);
    this.moduleName = 'allocation';
  }

  ngOnInit() {
    super.InitBase();
  }

  protected GetSTColumns(): OsharpSTColumn[] {
    let columns: OsharpSTColumn[] = [
      {
        title: '调拨审核', fixed: 'left', width: 65, buttons: [{ text: '调拨审核', icon: 'edit', acl: 'Root.Admin.OutStor.Allocation.Update', iif: row => (row.SupTicketRemark && row.ReconciliationRemark && (!row.SupCloseAccuntsFlag)), click: row => this.edit(row) }]
      },
      { title: '编号', index: 'Id', sort: true, readOnly: true, editable: true, filterable: true, ftype: 'number' },
      { title: '调拨编号', index: 'AllocationNo', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '资产编号', index: 'MatNo', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '调至部门', index: 'Dept', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '调拨日期', index: 'AllocationDate', sort: true, editable: true, filterable: true, type: 'date' },
      { title: '审核状态', index: 'VerifyState', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '备注', index: 'Remark', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '创建者', index: 'CreatorId', type: 'number' },
      { title: '创建时间', index: 'CreatedTime', sort: true, filterable: true, type: 'date' },
      { title: '更新者', index: 'LastUpdaterId', type: 'number' },
      { title: '更新时间', index: 'LastUpdatedTime', type: 'date' },
    ];
    return columns;
  }

  protected GetSFUISchema(): SFUISchema {
    let ui: SFUISchema = {
      '*': { spanLabelFixed: 100, grid: { span: 12 } },
      $AllocationNo: { grid: { span: 24 } },
      $MatNo: { grid: { span: 24 } },
      $Dept: { grid: { span: 24 } },
      $VerifyState: { grid: { span: 24 } },
      $Remark: { grid: { span: 24 } }
    };
    return ui;
  }
}

