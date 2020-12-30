import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import * as distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import { NzMessageService } from 'ng-zorro-antd';
import { NoticeItem, NoticeIconList } from '@delon/abc';
import * as signalR from '@microsoft/signalr';
import { async } from '@angular/core/testing';
import { SingnalRService } from 'src/app/singnal-r.service';


/**
 * 菜单通知
 */
@Component({
  selector: 'header-notify',
  template: `
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
  noticeMsg = '';

  constructor(private msg: NzMessageService, private cdr: ChangeDetectorRef,private singalR:SingnalRService) { }

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
    this.data = this.updateNoticeData(await this.singalR.invoke('GetExpiredMatsAsync'));  
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
  ngOnInit() {
    // 建立连接
    this.setupConnection();
  }
  // // 通过signalR发送消息
  // async sendMsg() {
  //   // 调用后端SendNoticeAsync方法
  //   await this.singalR.invoke('SendNoticeAsync', {
  //     avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png'
  //     , title: this.noticeMsg
  //     , datetime: new Date().toLocaleDateString
  //     , type: '通知'
  //   });
  // }
  // 设置signalR连接参数
  setupConnection = () => {
    this.singalR.on('UpdateNotices', (notices) => {
      this.updateNoticeData(notices);
      this.count = notices.length;
      this.cdr.detectChanges();
    });
    this.singalR.start(async (res) => {
      // 调用后端GetNoticesCountAsync方法
      this.count = await this.singalR.invoke('GetExpiredMatCountAsync');
      // 更新UI
      this.cdr.detectChanges();
    });
  }
}
