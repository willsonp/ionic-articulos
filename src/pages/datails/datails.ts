import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DatailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-datails',
  templateUrl: 'datails.html',
})
export class DatailsPage {
   item:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item=this.navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatailsPage');
  }

}
