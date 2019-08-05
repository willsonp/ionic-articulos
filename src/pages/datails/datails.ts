import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
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
  [x: string]: any;
  @ViewChild('tiTle') _tiTle;
  @ViewChild('desc') _desc;  
  
   item:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public servicio: ArticulosServices,public alertCtrl: AlertController) {
    this.item=this.navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatailsPage');
  }

  publicar(){
    if(this._desc.value!=="" && this._tiTle.value!==""){
      
      let obj:any={
      'titulo':this._tiTle.value,
      'descricion':this._desc.value,
      'likes':0
      }
    //console.log("======>"+this._desc.value)
    this.servicio.publicar(obj);
    this.limpiarValores();
    }else{
       const alert = this.alertCtrl.create({
        title: 'Control!',
        subTitle: 'NO se permite dejar el Valor del Titulo o Comentario en Blanco, Favor Llenarlo! ',
        buttons: ['OK']
      });
      alert.present();
      return
    }
  }

  limpiarValores(){
      const alert = this.alertCtrl.create({
        title: 'Estado!',
        subTitle: 'Publicado Satisfactoriamente! ',
        buttons: ['OK']
      });
      alert.present();
      //asiganr valor en blanco
      this._desc.value="";
      this._tiTle.value="";    
    
  }
}
