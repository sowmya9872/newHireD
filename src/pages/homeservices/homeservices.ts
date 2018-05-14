import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ElecPage} from '../elec/elec';
/**
 * Generated class for the HomeservicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-homeservices',
  templateUrl: 'homeservices.html',
})
export class HomeservicesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeservicesPage');
  }
  goelec(){
    this.navCtrl.push(ElecPage);
  }

}
