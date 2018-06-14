import {Component, Input} from '@angular/core';
import {NavController} from "ionic-angular";

@Component({
  selector: 'videoPreview',
  templateUrl: 'videoPreview.html'
})
export class videoPreview {
  vName:string;
  imageUrl:string;
  @Input() products: Array<any>;

  constructor(public navCtrl: NavController) {
    // console.log('preview initialization!');
  }
}
