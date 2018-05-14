import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeservicesPage } from '../homeservices/homeservices';
import { JobsPage } from '../jobs/jobs';
import { SkillPage } from '../skill/skill';
import { HirePage } from '../hire/hire';
import { MaplistPage } from '../maplist/maplist';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goServices(){
  this.navCtrl.push(HomeservicesPage);
}
goJob(){
	this.navCtrl.push(JobsPage);
}
goSkill(){
	this.navCtrl.push(SkillPage);
}

goHire(){
	this.navCtrl.push(HirePage);
}
goNear(){
  this.navCtrl.push(MaplistPage);
}
}
