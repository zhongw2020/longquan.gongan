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
            { text: '编辑', icon: 'edit', acl: 'Root.Admin.InStor.InStorMat.Update', iif: row => row.Updatable, click: row => this.edit(row) },
            { text: '删除', icon: 'delete', type: 'del', acl: 'Root.Admin.InStor.InStorMat.Delete', iif: row => row.Deletable, click: row => this.delete(row) },
          ]
        }]
      },
      //{ title: '编号', index: 'Id', sort: true, readOnly: true, editable: true, filterable: true, ftype: 'number' },
      { title: '国标大类', index: 'BigType', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '资产名称', index: 'MatName', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '入账日期', index: 'InaccountDate', sort: true, editable: true, filterable: true, type: 'date' },
      { title: '获取方式', index: 'GetMethod', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '使用状况', index: 'Usage', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '价值类型', index: 'ValueType', sort: true, editable: true, filterable: true, ftype: 'string' },
      //{ title: '其他5', index: 'Other5', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '入库价格', index: 'InPrice', sort: true, editable: true, filterable: true, type: 'number' },
      //{ title: '其他4', index: 'Other4', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '取得日期', index: 'GetDate', sort: true, editable: true, filterable: true, type: 'date' },
      { title: '管理部门编码', index: 'Managerdepartment', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '使用人员编码', index: 'UserNo', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '使用部门编码', index: 'Userdepartment', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '仓库名称', index: 'StoreName', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '销售商', index: 'SupName', sort: true, editable: true, filterable: true, ftype: 'string' },
    //  { title: '其他', index: 'Other', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '入库数量', index: 'In_Num', sort: true, editable: true, filterable: true, type: 'number' },
      { title: '用途', index: 'Purpose', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '当前数量', index: 'CurrNum', sort: true, editable: true, filterable: true, type: 'number' },
      { title: '质保期', index: 'WarrantyPeriod', sort: true, editable: true, filterable: true, type: 'date' },
      { title: '生产日期', index: 'ManufactureDate', sort: true, editable: true, filterable: true, type: 'date' },
     // { title: '其他2', index: 'Other2', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '资产分类', index: 'MatType', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '规格型号', index: 'Model', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '所属单位', index: 'Company', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '安全库存', index: 'SafeNum', sort: true, editable: true, filterable: true, type: 'number' },
      { title: '备注', index: 'Remark', sort: true, editable: true, filterable: true, ftype: 'string' },
     // { title: '质保期2', index: 'WarrantyPeriod2', sort: true, editable: true, filterable: true, type: 'number' },
      { title: '批次号', index: 'Batch', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '品牌', index: 'Brand', sort: true, editable: true, filterable: true, ftype: 'string' },
     // { title: '其他6', index: 'Other6', sort: true, editable: true, filterable: true, ftype: 'string' },
    //  { title: '其他3', index: 'Other3', sort: true, editable: true, filterable: true, ftype: 'string' },
    //  { title: '创建者', index: 'CreatorId', type: 'number' },
    //  { title: '创建时间', index: 'CreatedTime', sort: true, filterable: true, type: 'date' },
    //  { title: '更新者', index: 'LastUpdaterId', type: 'number' },
   //   { title: '更新时间', index: 'LastUpdatedTime', type: 'date' },
    ];
    return columns;
  }

  protected GetSFUISchema(): SFUISchema {
    let ui: SFUISchema = {
      '*': { spanLabelFixed: 100, grid: { span: 12 } },
      $BigType: { grid: { span: 24 } },
      $MatName: { grid: { span: 24 } },
      $GetMethod: { grid: { span: 24 } },
      $Usage: { grid: { span: 24 } },
      $ValueType: { grid: { span: 24 } },
      $Other5: { grid: { span: 24 } },
      $Other4: { grid: { span: 24 } },
      $Managerdepartment: { grid: { span: 24 } },
      $UserNo: { grid: { span: 24 } },
      $Userdepartment: { grid: { span: 24 } },
      $StoreName: { grid: { span: 24 } },
      $SupName: { grid: { span: 24 } },
      $Other: { grid: { span: 24 } },
      $Purpose: { grid: { span: 24 } },
      $Other2: { grid: { span: 24 } },
      $MatType: { grid: { span: 24 } },
      $Model: { grid: { span: 24 } },
      $Company: { grid: { span: 24 } },
      $Remark: { grid: { span: 24 } },
      $Batch: { grid: { span: 24 } },
      $Brand: { grid: { span: 24 } },
      $Other6: { grid: { span: 24 } },
      $Other3: { grid: { span: 24 } }
    };
    return ui;
  }
}

