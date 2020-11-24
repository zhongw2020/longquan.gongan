import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import * as distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import { NzMessageService } from 'ng-zorro-antd';
import { NoticeItem, NoticeIconList } from '@delon/abc';
import * as signalR from '@microsoft/signalr';
import { async } from '@angular/core/testing';
let connection=null;


/**
 * 菜单通知
 */
@Component({
  selector: 'header-notify',
  template: `
  <input [(ngModel)]="noticeMsg"/>
  <button (click)="sendMsg()">发送消息</button>
    <notice-icon
      [data]="data"
      [count]="count"
      [loading]="loading"
      btnClass="alain-default__nav-item"
      btnIconClass="alain-default__nav-item-icon"
      (select)="select($event)"
      (clear)="clear($event)"
      (popoverVisibleChange)="loadData()"
    ></notice-icon>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderNotifyComponent {
  data: NoticeItem[] = [
    {
      title: '通知',
      list: [],
      emptyText: '你已查看所有通知',
      emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg',
      clearText: '清空通知',
    },
    {
      title: '消息',
      list: [],
      emptyText: '您已读完所有消息',
      emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg',
      clearText: '清空消息',
    },
    {
      title: '待办',
      list: [],
      emptyText: '你已完成所有待办',
      emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/HsIsxMZiWKrNUavQUXqx.svg',
      clearText: '清空待办',
    },
  ];
  count = 0;
  loading = false;
  noticeMsg='';

  constructor(private msg: NzMessageService, private cdr: ChangeDetectorRef) {}

  private updateNoticeData(notices: NoticeIconList[]): NoticeItem[] {
    const data = this.data.slice();
    data.forEach(i => (i.list = []));

    notices.forEach(item => {
      const newItem = { ...item };
      if (newItem.datetime)
        newItem.datetime = distanceInWordsToNow(item.datetime!, {
          locale: (window as any).__locale__,
        });
      if (newItem.extra && newItem.status) {
        newItem.color = {
          todo: undefined,
          processing: 'blue',
          urgent: 'red',
          doing: 'gold',
        }[newItem.status];
      }
      data.find(w => w.title === newItem.type)!.list.push(newItem);
    });
    return data;
  }

  async loadData() {
    if (this.loading) return;
    this.loading = true;
      this.data = this.updateNoticeData(await connection.invoke('GetNoticesAsync'));
      this.loading = false;
      this.cdr.detectChanges();
  }

  clear(type: string) {
    this.msg.success(`清空了 ${type}`);
  }

  select(res: any) {
    this.msg.success(`点击了 ${res.title} 的 ${res.item.title}`);
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(){
    // 建立连接
    this.setupConnection();
    // 延迟1秒获取消息条数（后期考虑别的方式）
      setTimeout(async () => {
        // 调用后端GetNoticesCountAsync方法
        this.count=await connection.invoke('GetNoticesCountAsync');
        // 更新UI
        this.cdr.detectChanges();
      }, 1000);
      

  }
  // 通过signalR发送消息
  async sendMsg(){
    // 调用后端SendNoticeAsync方法
    await connection.invoke('SendNoticeAsync',{
      avatar:'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png'
      ,title:this.noticeMsg
      ,datetime:new Date().toLocaleDateString
      ,type:'通知'
    });
  }
  // 设置signalR连接参数
  setupConnection = () => {
    connection = new signalR.HubConnectionBuilder()
    // 对应后端Startup中设置的MapHub
        .withUrl('/signalRHub/noticeHub')
        // 等待0、2、10和30秒重连（可以自定义withAutomaticReconnect([0,2000,10000,30000])
        .withAutomaticReconnect()
        .build();
        // 定义前端Hub方法
    connection.on('UpdateNotices', (notices) => {
      this.updateNoticeData(notices);
      this.count=notices.length;
      this.cdr.detectChanges();
    });
    connection.onreconnecting(error=>{
      // console.assert(connection.state === signalR.HubConnectionState.Reconnecting);
      console.log("连接断开，正在尝试重连。。。"+error)
    });
    connection.onreconnected(connectionId => {
      // console.assert(connection.state === signalR.HubConnectionState.Connected);
      console.log("成功建立连接，ID为："+connectionId);
    });
    connection.start();
  }

}
