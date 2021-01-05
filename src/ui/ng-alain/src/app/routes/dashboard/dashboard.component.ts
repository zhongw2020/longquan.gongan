import { Component, OnInit, AfterViewInit, } from '@angular/core';

import * as moment from 'moment';
import { _HttpClient } from '@delon/theme';
import { G2PieData } from '@delon/chart/pie';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements AfterViewInit {

  dateFormat = 'yyyy/MM/dd';
  pickerRanges = {
    '今天': [moment().toDate(), moment().toDate()],
    '昨天': [moment().subtract(1, 'days').toDate(), moment().subtract(1, 'days').toDate()],
    '最近7天': [moment().subtract(6, 'days').toDate(), moment().toDate()],
    '最近30天': [moment().subtract(29, 'days').toDate(), moment().toDate()],
    '本月': [moment().startOf("month").toDate(), moment().endOf("month").toDate()],
    '上月': [moment().subtract(1, "months").startOf("month").toDate(), moment().subtract(1, "months").endOf("month").toDate()],
    '全部': [moment("1-1-1", "MM-DD-YYYY").toDate(), moment("12-31-9999", "MM-DD-YYYY").toDate()]
  };
  totalsynum: any;
  totalbfnum: any;
  totalsymoney: any;
  totalbfmoney: any;

  totalpd: string;
  salesPieDatasynum: G2PieData[] = [];
  salesPieDatasymoney: G2PieData[] = [];
  salesPieDatabfnum: G2PieData[] = [];
  salesPieDatabfmoney: G2PieData[] = [];



  summaries: Summary[] = [];
  lineChartData: any[] = [];

  constructor(private http: _HttpClient) { }

  ngAfterViewInit(): void {
    this.rangePickerChange(this.pickerRanges.最近30天);
  }

  rangePickerChange(e) {
    if (e.length === 0) {
      return;
    }
    const start = e[0].toLocaleDateString()
    const end = e[1].toLocaleDateString();
    this.reportseld(start, end);
   // this.userLine(start, end);
  }

  /** 统计数据 */
  //summaryData(start, end) {
  //  const url = `api/admin/dashboard/SummaryData?start=${start}&end=${end}`;
  //  this.http.get(url).subscribe((res: any) => {
  //    if (!res) {
  //      return;
  //    }
  //    this.summaries = [];
  //    this.summaries.push({ data: `999`, text: '告警数据统计 ', bgColor: 'bg-primary' });
  //    this.summaries.push({ data: `999999`, text: '资产金额统计 ', bgColor: 'bg-success' });
  //    this.summaries.push({ data: `999`, text: '报废数据统计', bgColor: 'bg-orange' });
  //    this.summaries.push({ data: `999999`, text: '其他数据统计', bgColor: 'bg-magenta' });
  //  });
  //}

  reportseld(start, end) {
    const url = `api/admin/dashboard/ReportSeld?start=${start}&end=${end}`;
    this.http.get(url).subscribe((res: any) => {


      if (!res) {

        return;
      }

      this.summaries = [];
     
   ;
      this.salesPieDatasynum = [];
      this.salesPieDatasymoney = [];
      this.salesPieDatabfnum = [];
      this.salesPieDatabfmoney = [];

      //第一排
      this.summaries.push({ data: `${res.salesoutall}`, text: '告警数据统计', bgColor: 'bg-red' });
      this.summaries.push({data: `${res.salesoutleijilirun}`, text: '资产金额统计', bgColor: 'bg-success' });
      this.summaries.push({ data: `${res.salesout}`, text: '报废数据统计', bgColor: 'bg-success' });
      this.summaries.push({ data: `${res.salesoutyuelirun}`, text: '其他数据统计', bgColor: 'bg-success' });


      //饼状图人员派单单量情况
      this.totalsynum = 0;
      for (var i = 0; i < res.dt001.length; i++) {
        this.salesPieDatasynum.push({ x: res.dt001[i].Userdepartment, y: Number.parseFloat(`${res.dt001[i].SumNum}`) });
      }
      this.totalsynum = this.salesPieDatasynum.reduce((pre, now) => now.y + pre, 0).toFixed(2) + '个';


      //饼状图人员派单单量情况

      this.totalbfnum = 0;
      for (var i = 0; i < res.dt001.length; i++) {
        this.salesPieDatabfnum.push({ x: res.dt001[i].Userdepartment, y: Number.parseFloat(`${res.dt001[i].SumNum}`) });
        this.totalbfnum += Number.parseFloat(`${res.dt001[i].SumNum}`);
      }
      this.totalbfnum = this.salesPieDatabfnum.reduce((pre, now) => now.y + pre, 0).toFixed(2)  + '个';
    


      //饼状图月销售金额情况
      for (var i = 0; i < res.dt003.length; i++) {
        this.salesPieDatasymoney.push({ x: res.dt003[i].Userdepartment, y: Number.parseFloat(`${res.dt003[i].SumNum}`) });
      }
      this.totalsymoney = `&yen ${this.salesPieDatasymoney.reduce((pre, now) => now.y + pre, 0).toFixed(2)}`;



      //饼状图人员派单单量情况

      for (var i = 0; i < res.dt003.length; i++) {
        this.salesPieDatabfmoney.push({ x: res.dt003[i].Userdepartment, y: Number.parseFloat(`${res.dt003[i].SumNum}`) });
      }
      this.totalbfmoney = `&yen ${this.salesPieDatabfmoney.reduce((pre, now) => now.y + pre, 0).toFixed(2)}`;



    });
  }


  /** 用户曲线 */
  userLine(start, end) {
    let url = `api/admin/dashboard/LineData?start=${start}&end=${end}`;
    this.http.get(url).subscribe((res: any[]) => {
      if (!res || !res.length) {
        return;
      }
      for (const item of res) {
        this.lineChartData.push({
          x: new Date(item.Date),
          y1: item.DailyCount,
          y2: item.DailySum
        });
      }
    });
  }
}

export class Summary {
  data: string;
  text: string;
  bgColor = 'bg-primary';
}
