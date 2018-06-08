import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ListPage} from "../list/list";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {//构造函数，用于初始化，会在类生成实例时调用（new的时候）
    console.log('Home Page Constructor initialization!');
    this.pushPage();
  }
  //导航到新页面
  pushPage(){
    console.log('button click!');
    this.navCtrl.push(ListPage, {
      id: 123,
      name: "list"
    });
  }
}
