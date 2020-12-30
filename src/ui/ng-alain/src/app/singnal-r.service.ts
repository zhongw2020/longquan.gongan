import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';

// Hub地址
const url = '/signalRHub/noticeHub';
@Injectable({
  providedIn: 'root'
})
export class SingnalRService {

  connection = null;
  constructor() {
    this.connection = new signalR.HubConnectionBuilder()
      // 对应后端Startup中设置的MapHub
      .withUrl(url)
      // 等待0、2、10和30秒重连（可以自定义withAutomaticReconnect([0,2000,10000,30000])
      .withAutomaticReconnect()
      .build();
    this.connection.onreconnecting(error => {
      // console.assert(connection.state === signalR.HubConnectionState.Reconnecting);
      console.log("连接断开，正在尝试重连。。。" + error)
    });
    this.connection.onreconnected(connectionId => {
      // console.assert(connection.state === signalR.HubConnectionState.Connected);
      console.log("成功建立连接，ID为：" + connectionId);
    });
  }
  // 
  on(methodName: string, func:any) {
    // 定义前端Hub方法
    this.connection.on(methodName, func);
  }
  async invoke(methodName: string, parameters?: any) {
    // 调用后端SendNoticeAsync方法
    if (parameters) {
      return this.connection.invoke(methodName, parameters);
    } else {
      return this.connection.invoke(methodName);
    }

  }
  start(res?, err?) {
    this.connection.start().then(res, err);
  }
}
