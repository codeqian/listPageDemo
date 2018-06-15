import { Component } from '@angular/core';
import {NavController, NavParams} from "ionic-angular";

@Component({
  templateUrl: 'player.html'
})

export class PlayerPage {
  vid:string;
  title:string;
  vName:string;
  constructor(public navCtrl: NavController,navParams:NavParams) {
    this.vid=navParams.get("id");
    this.vName=navParams.get("name");
    console.log('List Page Constructor initialization!');
    this.title=this.vName+":"+this.vid;
  }
}
