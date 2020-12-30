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
import { XlsxService, STData } from '@delon/abc';
import { AjaxResult, FilterRule, FilterOperate } from '../../../shared/osharp/osharp.model';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-in-stor-mat',
  templateUrl: './in-stor-mat.component.html',
  styles: []
})
export class InStorMatComponent extends STComponentBase implements OnInit {
  scroll = { x: '50px' };
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
      //{ title: '编号', index: 'Id', sort: true, readOnly: true, editable: true, filterable: true, ftype: 'number' },
      { title: '入库凭证号', index: 'InVoucher', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '资产编号', index: 'MatNo', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '资产名称', index: 'Name', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '入账日期', index: 'InaccountDate', sort: true, editable: true, filterable: true, type: 'date' },
      //{ title: '价值类型', index: 'ValueType', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '入库价格', index: 'InPrice', sort: true, editable: true, filterable: true, type: 'number' },
      { title: '入库数量', index: 'In_Num', sort: true, editable: true, filterable: true, type: 'number' },
      { title: '当前数量', index: 'Curr_Num', sort: true, editable: true, filterable: true, type: 'number' },
      { title: '退库数量', index: 'Back_Num', sort: true, editable: true, filterable: true, type: 'number' },
      { title: '生产日期', index: 'ManufactureDate', sort: true, editable: true, filterable: true, type: 'date' },
      { title: '质保期', index: 'WarrantyPeriod', sort: true, editable: true, filterable: true, type: 'date' },
      //{ title: '获取方式', index: 'GetMethod', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '取得日期', index: 'GetDate', sort: true, editable: true, filterable: true, type: 'date' },
      { title: '使用状况', index: 'Usage', sort: true, editable: true, filterable: true, ftype: 'string' },
      //{ title: '管理部门', index: 'ManagerdepartmentNo', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '使用部门', index: 'UserdepartmentNo', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '使用人员', index: 'UserNo', sort: true, editable: true, filterable: true, ftype: 'string' },
      //{ title: '用途', index: 'Purpose', sort: true, editable: true, filterable: true, ftype: 'string' },
      //{ title: '所属单位', index: 'Company', sort: true, editable: true, filterable: true, ftype: 'string' },
      //{ title: '仓库编码', index: 'StoreNo', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '销售商', index: 'SupNo', sort: true, editable: true, filterable: true, ftype: 'string' },
      { title: '备注', index: 'Remark', sort: true, editable: true, filterable: true, ftype: 'string' },
      //{ title: '其他', index: 'Other', sort: true, editable: true, filterable: true, ftype: 'string' },
      // { title: '创建时间', index: 'CreatedTime', sort: true, filterable: true, type: 'date' },
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
      $InVoucher: { grid: { span: 8 } },
      $MatNo: { grid: { span: 8 } },
      //  $ValueType: { grid: { span: 8 } },
      //   $GetMethod: { grid: { span: 24 } },
      //     $Usage: { grid: { span: 24 } },
      InaccountDate: { grid: { span: 8 } },

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
  private getRepositoryOfOptionData(url: string, name: string, key_names: string[], keyword?: string): Observable<string[]> {
    let rule = new FilterRule(name, keyword);
    rule.Operate = FilterOperate.Contains;
    this.request.FilterGroup.Rules = [];
    this.request.PageCondition.SortConditions = [];
    this.request.FilterGroup.Rules.push(rule);
    return this.http.post(url, this.request).pipe(map((resp: any) => {
      const arr = [];
      const list = resp.Rows;
      if (list && list.length) {
        list.forEach(element => {
          let label = ''
          key_names.forEach(s => { label += (label !== '' ? ' | ' : '') + element[s] })
          arr.push({ label, value: element.Id });
        });
      }
      return arr;
    }),
    );
  }
  private addSelectOption(optionList: any[]) {
    // const option = {};
    // if(true){//加上你的判断条件
    //   // option['label'] = '下拉项文字';
    //   // option['value'] = '下拉项的值';

    //   //判断数据是否已存在
    //   const isExist = optionList.some((item) => {
    //     return item.value == option['value'];
    //   });
    //   if(!isExist){
    //     optionList.push(option);
    //   }
    // }
    return optionList;
  }
  select_ui(url: string, name: string, key_names: string[]) {
    return {
      widget: 'select',
      placeholder: '请选择',
      allowClear: true,
      serverSearch: true,
      notFoundContent: '没有任何数据',
      // 懒加载数据，利用管道，插入数据项
      // 如果是编辑状态addSelectiOtion方法进行判断，插入已选中数据项。
      // 方法getRepositoryOfOptionData返回的是observable
      asyncData: () => this.getRepositoryOfOptionData(url, name, key_names).pipe(map((
        value: any) => {
        return this.addSelectOption(value)
      })),
      onSearch: (keyword: string) => this.getRepositoryOfOptionData(url, name, key_names, keyword).toPromise(),
    }
  }

  private createdate: any;
  private indate: any;
  protected datePipe: DatePipe = new DatePipe('en-US');
  create() {
    this.createdate = this.datePipe.transform(new Date(), 'yyyyMMddHHmmssS');
    this.indate = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');
    this.schema = {
      properties: {
        InVoucher: {
          type: 'string',
          format: 'data-time',
          title: '入库凭证号',
          readOnly: true,
          default: this.createdate,

        },
        MatNo: {
          type: 'string',
          title: '资产编号',
          default: '请选择',
          ui: this.select_ui('api/Admin/BaseMat/Read', 'Name', ['No', 'Name'])
        },
        InaccountDate: {
          type: 'string',
          format: 'date-time',
          title: '入账日期',

        },
        ManufactureDate: {
          type: 'string',
          format: 'date-time',
          title: '生产日期',

        },
        GetDate: {
          type: 'string',
          format: 'date-time',
          title: '入库时间',
          default: this.indate,
        },


        InPrice: {
          type: 'number',
          title: '入库价格',
        },
        In_Num: {
          type: 'number',
          title: '入库数量',
        },
        WarrantyPeriod: {
          type: 'number',
          title: '质保期（天）',
        },
        Usage: {
          type: 'string',
          title: '使用状况',
        },
        UserdepartmentNo:
        {
          type: 'string',
          title: '使用部门',
          default: '请选择',
          ui: this.select_ui('api/Admin/BaseDept/Read', 'Name', ['No', 'Name'])
        },
        UserNo: {
          type: 'string',
          title: '使用人员',
          default: '请选择',
          ui: this.select_ui('api/Admin/BaseStaff/Read', 'Name', ['No', 'Name'])
        },


        SupNo: {
          type: 'string',
          title: '销售商',
          default: '请选择',
          ui: this.select_ui('api/Admin/BaseSup/Read', 'Name', ['No', 'Name'])
        },
        Remark: {
          type: 'string',
          title: '备注',
        }
      },
    };
    this.editRow = {};
    this.editTitle = '新增';
    this.editModal.open();
  }

}

