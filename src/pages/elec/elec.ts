import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AlertController} from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-elec',
  templateUrl: 'elec.html',
})
export class ElecPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ElecPage');
  }
  showData() {
  		let alertData = this.alertCtrl.create({
  			title: 'Little Boy',
  			subTitle: 'Baby Sitter',
  			inputs: [
  				{
  					name: 'feedback',
  					placeholder: 'Give Feedback'
  				},
  			],
  			buttons: [
  			{
  				text: 'Contact',
  			},
  			{
  				text: 'Close',
  			}
  			]

  		});
  		alertData.present();
  }

showPop(){
	let alertData = this.alertCtrl.create({
		title: 'Mobile no: 9274624906',
		buttons: [
		{
			text: 'Call',
		},
		{
			text: 'close',
		}]
	});
	alertData.present();
}

}
