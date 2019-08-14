import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MostrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mostrar',
  templateUrl: 'mostrar.html',
})
export class MostrarPage {
   data:any;   
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data=this.navParams.get('item_o');
    console.log(this.data);
  }

    

}
