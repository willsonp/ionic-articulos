import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ArticulosServices } from '../../services/articulosServices';

/**
 * Generated class for the NewpostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newposts',
  templateUrl: 'newposts.html',
})
export class NewpostsPage {
  @ViewChild('title') _tiTle;
  @ViewChild('contenido') _desc; 
  @ViewChild('url') _url; 
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public servicio: ArticulosServices,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewpostsPage');
  }

  newPost(){
    if(this._desc.value!=="" && this._tiTle.value!==""){
      
      let obj:any={
        'id':Date.now(),  
        'titulo':this._tiTle.value,
        'descripcion':this._desc.value,
        'url':this._url.value,
        'likes':0,
        'unlikes':0              
        }
      //this.servicio.publicar(obj); 
    this.servicio.editar(obj);
    
    //this.cargarData();

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
      this._tiTle.value="";
      this._desc.value="";
      this._url.value="";
    
  }

}
