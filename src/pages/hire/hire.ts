import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ElecPage } from '../elec/elec';


@IonicPage()
@Component({
  selector: 'page-hire',
  templateUrl: 'hire.html',
})
export class HirePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  itemSelected(item: string) {
    console.log("Selected Item", item);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HirePage');
  }
  goelec(){
    this.navCtrl.push(ElecPage);
  }
}
