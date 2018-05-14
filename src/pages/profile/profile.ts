import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  //    this.isAndroid = platform.is('android');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  edit(){
    this.navCtrl.push('EditPage');
  }
  change(){
    this.navCtrl.push('LocatiPage');
  }
  recent(){
    this.navCtrl.push('RecentactyPage');
  }

/**  pet: string = "details";
  isAndroid: boolean = false;
*/

}
