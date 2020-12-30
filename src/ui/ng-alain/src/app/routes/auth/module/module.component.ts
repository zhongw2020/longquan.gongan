import { Component, OnInit, ViewChild } from '@angular/core';
import { AlainService } from '@shared/osharp/services/alain.service';
import { PageRequest, FilterRule, FilterOperate, FilterGroup } from '@shared/osharp/osharp.model';
import { List } from 'linqts';
import { ArrayService } from '@delon/util';
import { STColumn, STReq, STPage, STRes, STComponent } from '@delon/abc';
import { XlsxService } from '@delon/abc/xlsx';
import { FunctionViewComponent } from '@shared/components/function-view/function-view.component';

export interface TreeNodeInterface {
  Id: number;
  Name: string;
  Remark: string;
  Code: string;
  OrderCode: number;
  level: number;
  expand: boolean;
  children?: TreeNodeInterface[];
}

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styles: []
})
export class ModuleComponent implements OnInit {

  data = [];
  request: PageRequest = new PageRequest();
  mapOfExpandedData: { [key: string]: TreeNodeInterface[] } = {};

  constructor(private alain: AlainService, private arraySrv: ArrayService,private xlsx: XlsxService) { }

  ngOnInit() {
    this.loadData();
  }
  export():void{
    let data = [['操作','名称','备注','代码','排序']]
    data.push(['操作','名称','备注','代码','排序']);
    // const data = [this.columns.map(i => i.title)]; 
    data.push(['操作1','名称1','备注1','代码1','排序1']);
    data.push(['操作2','名称2','备注2','代码2','排序2']);
    data.push(['操作3','名称3','备注3','代码3','排序3']);
    data.push(['操作4','名称4','备注4','代码4','排序4']);
    data.push(['操作5','名称5','备注5','代码5','排序5']);
    data.push(['操作6','名称6','备注6','代码6','排序6']);
    // this.users.forEach(i => data.push(this.columns.map(c => i[c.index as string])));
    this.xlsx.export({
      sheets: [
        {
          data,
          name: 'sheet name',
        },
      ],
    });
  }
  loadData() {
    let url = 'api/admin/module/read';
    this.alain.http.post(url, this.request).subscribe(res => {
      let tree = this.arraySrv.arrToTree(res, { idMapName: 'Id', parentIdMapName: 'ParentId' });
      this.data = tree;
      tree.forEach(item => this.mapOfExpandedData[item.Id] = this.convertTreeToList(item));
    });
  }

  collapse(array: TreeNodeInterface[], data: TreeNodeInterface, $event: boolean): void {
    if ($event === false) {
      if (data.children) {
        data.children.forEach(d => {
          const target = array.find(a => a.Id === d.Id)!;
          target.expand = false;
          this.collapse(array, target, false);
        });
      } else {
        return;
      }
    }
  }

  convertTreeToList(root: object): TreeNodeInterface[] {
    const stack: any[] = [];
    const array: any[] = [];
    const hashMap = {};
    stack.push({ ...root, level: 0, expand: true });

    while (stack.length !== 0) {
      const node = stack.pop();
      this.visitNode(node, hashMap, array);
      if (node.children) {
        for (let i = node.children.length - 1; i >= 0; i--) {
          stack.push({ ...node.children[i], level: node.level + 1, expand: true, parent: node });
        }
      }
    }

    return array;
  }

  visitNode(node: TreeNodeInterface, hashMap: { [key: number]: any }, array: TreeNodeInterface[]): void {
    if (!hashMap[node.Id]) {
      hashMap[node.Id] = true;
      array.push(node);
    }
  }

  // #region 抽屉

  drawerTitle = '';
  drawerVisible = false;
  @ViewChild('function', { static: false }) function: FunctionViewComponent;

  showDrawer(item) {
    this.drawerTitle = `查看模块功能 - ${item.Remark || item.Name}`;
    this.drawerVisible = true;

    let filter: FilterGroup = new FilterGroup();
    filter.Rules.push(new FilterRule('TreePathString', `$${item.Id}$`, FilterOperate.Contains));
    setTimeout(() => {
      this.function.reload(filter);
    }, 100);
  }

  closeDrawer() {
    this.drawerVisible = false;
  }

  // #endregion
}
