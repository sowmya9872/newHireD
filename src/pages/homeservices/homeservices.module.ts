import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeservicesPage } from './homeservices';

@NgModule({
  declarations: [
    HomeservicesPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeservicesPage),
  ],
})
export class HomeservicesPageModule {}
