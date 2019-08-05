import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ArticulosServices } from '../../services/articulosServices';

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
  @ViewChild('tiTle') _tiTle;
  @ViewChild('desc') _desc;  
  
   item:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public servicio: ArticulosServices) {
    this.item=this.navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatailsPage');
  }

  publicar(){
    let obj:any={
      'titulo':this._tiTle.value,
      'descricion':this._desc.value,
      'likes':0
    }
    //console.log("======>"+this._desc.value)
    this.servicio.publicar(obj);
  }

}
