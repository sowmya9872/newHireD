import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocatiPage } from './locati';

@NgModule({
  declarations: [
    LocatiPage,
  ],
  imports: [
    IonicPageModule.forChild(LocatiPage),
  ],
})
export class LocatiPageModule {}
