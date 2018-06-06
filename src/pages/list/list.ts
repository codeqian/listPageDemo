import { Component } from '@angular/core';
import {NavController} from "ionic-angular";

@Component({
  templateUrl: 'list.html'
})
export class ListPage {
  constructor(public navCtrl: NavController) {
    console.log('List Page Constructor initialization!');
  }
}
