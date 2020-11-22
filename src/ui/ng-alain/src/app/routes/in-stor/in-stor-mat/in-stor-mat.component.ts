// ------------------------------------------------------------------------------
//  <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//  </once-generated>
//
//  <copyright file="in-stor-mat.module.ts" company="longquan.gongan">
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
  selector: 'app-in-stor-mat',
  templateUrl: './in-stor-mat.component.html',
  styles: []
})
export class InStorMatComponent extends STComponentBase implements OnInit {

  constructor(injector: Injector) {
    super(injector);
    this.moduleName = 'inStorMat';
  }

  ngOnInit() {
    super.InitBase();
  }

  protected GetSTColumns(): OsharpSTColumn[] {
    let columns: OsharpSTColumn[] = [
      {
        title: '操作', fixed: 'left', width: 65, buttons: [{
          text: '操作', children: [
            { text: '编辑', icon: 'edit', acl: 'Root.Admin.InStor.InStorMat.Update', click: row => this.edit(row) },
            { text: '删除', icon: 'delete', type: 'del', acl: 'Root.Admin.InStor.InStorMat.Delete', click: row => this.delete(row) },
          ]
        }]
      },
      { title: '编号', index: 'Id', sort: true, readOnly: true, editable: true, filterable: true, ftype: 'number' },
      { title: '入库凭证号', index: 'InVoucher', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '资产编号', index: 'MatNo', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '入账日期', index: 'InaccountDate', sort: true, editable: true, filterable: true, type: 'date' },
      { title: '价值类型', index: 'ValueType', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '入库价格', index: 'InPrice', sort: true, editable: true, filterable: true, type: 'number' },
      { title: '获取方式', index: 'GetMethod', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '取得日期', index: 'GetDate', sort: true, editable: true, filterable: true, type: 'date' },
      { title: '使用状况', index: 'Usage', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '管理部门编码', index: 'ManagerdepartmentNo', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '使用部门编码', index: 'UserdepartmentNo', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '使用人员编码', index: 'UserNo', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '用途', index: 'Purpose', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '所属单位', index: 'Company', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '仓库编码', index: 'StoreNo', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '销售商编码', index: 'SupNo', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '备注', index: 'Remark', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '其他', index: 'Other', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '创建时间', index: 'CreatedTime', sort: true, filterable: true, type: 'date' },
    ];
    return columns;
  }

  protected GetSFSchema(): SFSchema {
    let schema: SFSchema = {
      properties: this.ColumnsToSchemas(this.columns),
      required: ['InVoucher']
    };
    return schema;
  }

  protected GetSFUISchema(): SFUISchema {
    let ui: SFUISchema = {
      '*': { spanLabelFixed: 100, grid: { span: 12 } },
      $InVoucher: { grid: { span: 24 } },
      $MatNo: { grid: { span: 24 } },
      $ValueType: { grid: { span: 24 } },
      $GetMethod: { grid: { span: 24 } },
      $Usage: { grid: { span: 24 } },
      $ManagerdepartmentNo: { grid: { span: 24 } },
      $UserdepartmentNo: { grid: { span: 24 } },
      $UserNo: { grid: { span: 24 } },
      $Purpose: { grid: { span: 24 } },
      $Company: { grid: { span: 24 } },
      $StoreNo: { grid: { span: 24 } },
      $SupNo: { grid: { span: 24 } },
      $Remark: { grid: { span: 24 } },
      $Other: { grid: { span: 24 } }
    };
    return ui;
  }
}

