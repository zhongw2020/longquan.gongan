// ------------------------------------------------------------------------------
//  <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//  </once-generated>
//
//  <copyright file="store-sum.module.ts" company="longquan.gongan">
//      longquan.gongan
//  </copyright>
//  <site>http://longquan.gongan</site>
//  <last-editor>longquan.gongan</last-editor>
// -----------------------------------------------------------------------

import { Component, OnInit, Injector, ChangeDetectorRef } from '@angular/core';
import { SFUISchema, SFSchema } from '@delon/form';
import { OsharpSTColumn } from '@shared/osharp/services/alain.types';
import { STComponentBaseD } from '@shared/osharp/components/st-component-base-d';
import { STData, STChange, XlsxService } from '@delon/abc';

@Component({
  selector: 'app-store-sum',
  templateUrl: './store-sum.component.html',
  styles: []
})
export class StoreSumComponent extends STComponentBaseD implements OnInit {
  selectedRows: STData[] = [];
  totalCallNum = 0;

  constructor(injector: Injector, private cdr: ChangeDetectorRef,  xlsx: XlsxService) {
    super(injector, xlsx);
    this.moduleName = 'storeSum';
  }

  ngOnInit() {
    super.InitBase();
  }
  change(e: STChange) {

    switch (e.type) {
      case 'checkbox':
        this.selectedRows = e.checkbox!;
        this.totalCallNum = this.selectedRows.reduce((total, cv) => total + cv.SumNum, 0);
        this.cdr.detectChanges();
        break;
      case 'filter':
        //  this.getData();
        break;

    }
  }


  protected GetSTColumns(): OsharpSTColumn[] {
    let columns: OsharpSTColumn[] = [
      { title: '', index: 'key', type: 'checkbox' },
     // { title: '编号', index: 'Id', sort: true, readOnly: true, editable: true, filterable: true, ftype: 'number' },
      { title: '所属单位', index: 'ComPany', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '国标大类', index: 'BigType', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '使用部门', index: 'Managerdepartment', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '用途', index: 'Usage', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '资产名称', index: 'MatName', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '安全库存', index: 'SafeNum', sort: true, editable: true, filterable: true, type: 'number' },
      { title: '库存总量', index: 'SumNum', sort: true, editable: true, filterable: true, type: 'number' },
    
    ];
    return columns;
  }

  protected GetSFUISchema(): SFUISchema {
    let ui: SFUISchema = {
      '*': { spanLabelFixed: 100, grid: { span: 12 } },
      $ComPany: { grid: { span: 24 } },
      $BigType: { grid: { span: 24 } },
      $Managerdepartment: { grid: { span: 24 } },
      $MatName: { grid: { span: 24 } },
      $Usage: { grid: { span: 24 } }
    };
    return ui;
  }
}

