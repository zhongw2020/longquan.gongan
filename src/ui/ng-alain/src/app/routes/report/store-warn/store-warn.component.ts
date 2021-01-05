// ------------------------------------------------------------------------------
//  <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//  </once-generated>
//
//  <copyright file="store-warn.module.ts" company="longquan.gongan">
//      longquan.gongan
//  </copyright>
//  <site>http://longquan.gongan</site>
//  <last-editor>longquan.gongan</last-editor>
// -----------------------------------------------------------------------

import { Component, OnInit, Injector, ChangeDetectorRef } from '@angular/core';
import { SFUISchema, SFSchema } from '@delon/form';
import { OsharpSTColumn } from '@shared/osharp/services/alain.types';
import { STComponentBaseD } from '@shared/osharp/components/st-component-base-d';
import { XlsxService } from '@delon/abc';

@Component({
  selector: 'app-store-warn',
  templateUrl: './store-warn.component.html',
  styles: []
})
export class StoreWarnComponent extends STComponentBaseD implements OnInit {

  constructor(injector: Injector, private cdr: ChangeDetectorRef, xlsx: XlsxService) {
    super(injector, xlsx);
    this.moduleName = 'storeWarn';
  }

  ngOnInit() {
    super.InitBase();
  }

  protected GetSTColumns(): OsharpSTColumn[] {
    let columns: OsharpSTColumn[] = [
  
     // { title: '编号', index: 'Id', sort: true, readOnly: true, editable: true, filterable: true, ftype: 'number' },
      { title: '所属单位', index: 'ComPany', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '国标大类', index: 'BigType', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '使用部门', index: 'Managerdepartment', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '资产名称', index: 'MatName', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '安全库存', index: 'SafeNum', sort: true, editable: true, filterable: true, type: 'number' },
      { title: '库存总量', index: 'SumNum', sort: true, editable: true, filterable: true, type: 'number' },
     //{ title: '创建时间', index: 'CreatedTime', sort: true, filterable: true, type: 'date' },
    ];
    return columns;
  }

  protected GetSFUISchema(): SFUISchema {
    let ui: SFUISchema = {
      '*': { spanLabelFixed: 100, grid: { span: 12 } },
      $ComPany: { grid: { span: 24 } },
      $BigType: { grid: { span: 24 } },
      $Managerdepartment: { grid: { span: 24 } },
      $MatName: { grid: { span: 24 } }
    };
    return ui;
  }
}

