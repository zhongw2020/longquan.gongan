// ------------------------------------------------------------------------------
//  <once-generated>
//     这个文件只生成一次，再次生成不会被覆盖。
//  </once-generated>
//
//  <copyright file="in-stor-mat-view.module.ts" company="longquan.gongan">
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
  selector: 'app-in-stor-mat-view',
  templateUrl: './in-stor-mat-view.component.html',
  styles: []
})
export class InStorMatViewComponent extends STComponentBase implements OnInit {

  constructor(injector: Injector) {
    super(injector);
    this.moduleName = 'inStorMatView';
  }

  ngOnInit() {
    super.InitBase();
  }

  protected GetSTColumns(): OsharpSTColumn[] {
    let columns: OsharpSTColumn[] = [
      {
        title: '操作', fixed: 'left', width: 65, buttons: [{
          text: '操作', children: [
            { text: '编辑', icon: 'edit', acl: 'Root.Admin.InStorView.InStorMatView.Update', iif: row => row.Updatable, click: row => this.edit(row) },
            { text: '删除', icon: 'delete', type: 'del', acl: 'Root.Admin.InStorView.InStorMatView.Delete', iif: row => row.Deletable, click: row => this.delete(row) },
          ]
        }]
      },
      { title: '编号', index: 'Id', sort: true, readOnly: true, editable: true, filterable: true, ftype: 'number' },
      { title: '入库凭证号', index: 'InVoucher', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '审核状态', index: 'InVerifyState', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '入账日期', index: 'InaccountDate', sort: true, editable: true, filterable: true, type: 'date' },
      { title: '价值类型', index: 'ValueType', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '入库价格', index: 'InPrice', sort: true, editable: true, filterable: true, type: 'number' },
      { title: '获取方式', index: 'GetMethod', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '取得日期', index: 'GetDate', sort: true, editable: true, filterable: true, type: 'date' },
      { title: '使用状况', index: 'Usage', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '管理部门名称', index: 'ManagerdepartmentName', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '使用部门名称', index: 'UserdepartmentName', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '使用人员名称', index: 'UserName', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '用途', index: 'Purpose', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '所属单位', index: 'Company', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '仓库名称', index: 'StoreName', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '销售商名称', index: 'SupName', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '备注', index: 'Remark', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '其他', index: 'Other', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '当前数量', index: 'Curr_Num', sort: true, editable: true, filterable: true, type: 'number' },
      { title: '入库数量', index: 'In_Num', sort: true, editable: true, filterable: true, type: 'number' },
      { title: '质保期', index: 'WarrantyPeriod', sort: true, editable: true, filterable: true, type: 'date' },
      { title: '生产日期', index: 'ManufactureDate', sort: true, editable: true, filterable: true, type: 'date' },
      { title: '资产名称', index: 'Name', sort: true, editable: true, filterable: true, ftype: 'string' },
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
      required: ['InVoucher']
    };
    return schema;
  }

  protected GetSFUISchema(): SFUISchema {
    let ui: SFUISchema = {
      '*': { spanLabelFixed: 100, grid: { span: 12 } },
      $InVoucher: { grid: { span: 24 } },
      $InVerifyState: { grid: { span: 24 } },
      $ValueType: { grid: { span: 24 } },
      $GetMethod: { grid: { span: 24 } },
      $Usage: { grid: { span: 24 } },
      $ManagerdepartmentName: { grid: { span: 24 } },
      $UserdepartmentName: { grid: { span: 24 } },
      $UserName: { grid: { span: 24 } },
      $Purpose: { grid: { span: 24 } },
      $Company: { grid: { span: 24 } },
      $StoreName: { grid: { span: 24 } },
      $SupName: { grid: { span: 24 } },
      $Remark: { grid: { span: 24 } },
      $Other: { grid: { span: 24 } },
      $Name: { grid: { span: 24 } }
    };
    return ui;
  }
}

