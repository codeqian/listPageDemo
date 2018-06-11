import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {HttpClient} from "@angular/common/http";

@Component({
  templateUrl: 'list.html'
})
export class ListPage {
  keyWords:string;
  path:string;

  constructor(public navCtrl: NavController,private http: HttpClient) {
    console.log('List Page Constructor initialization!');
  }
  goSearch(){
    console.log('key words:'+this.keyWords);
    if(this.keyWords==undefined){
      this.path="http://open.abc.com/search/video/by_keywords?category=1362&keywords=&size=20&page=1";
    }else{
      this.path="http://open.abc.com/search/video/by_keywords?category=1362&keywords="+this.keyWords+"&size=20&page=1";
    }
    this.http.get(this.path).subscribe(data => {
      console.log(data);
      this.showList(data);
    });
  }
  showList(data:any){
  }
}
