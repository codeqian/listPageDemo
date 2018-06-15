import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {HttpClient} from "@angular/common/http";
import {PlayerPage} from "../player/player";

@Component({
  templateUrl: 'list.html'
})
export class ListPage {
  keyWords:string;
  path:string;
  listInfo=[];

  constructor(public navCtrl: NavController,private http: HttpClient) {
    console.log('List Page Constructor initialization!');
    this.goSearch();
  }

  goSearch(){
    console.log('key words:'+this.keyWords);
    if(this.keyWords==undefined){
      this.path="http://open.abc.com/search/video/by_keywords?category=1362&keywords=&size=20&page=1";
    }else{
      this.path="http://open.abc.com/search/video/by_keywords?category=1362&keywords="+this.keyWords+"&size=20&page=1";
    }
    this.http.get(this.path).subscribe(data => {
      let listData:any=data;
      this.listInfo=listData.body.resources;
      // console.log("listData------->",data);
    }, error => {
      console.log(error);
    });
  }

  openPlayer(vName:string,vid:String){
    console.log("open video:",vid);
    this.navCtrl.push(PlayerPage, {
      id: vid,
      name:vName
    });
  }
}
