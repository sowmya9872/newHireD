import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AlertController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-recentacty',
  templateUrl: 'recentacty.html',
})
export class RecentactyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecentactyPage');
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
		title: 'Are you sure to clear your history',
		buttons: [
		{
			text: 'Yes',
		},
		{
			text: 'no',
		}]
	});
	alertData.present();
}
}
