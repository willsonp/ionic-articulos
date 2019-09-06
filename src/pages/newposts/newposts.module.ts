import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewpostsPage } from './newposts';

@NgModule({
  declarations: [
    NewpostsPage,
  ],
  imports: [
    IonicPageModule.forChild(NewpostsPage),
  ],
})
export class NewpostsPageModule {}
