import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginServices } from '../../services/loginService';

/**
 * Generated class for the RegistrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {

  @ViewChild('userEmail') _userE;
  @ViewChild('userPasswd') _userPwd;  
  data:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams ,public servicio: LoginServices,public alertCtrl: AlertController) {
  }

  register() {
    console.log('ionViewDidLoad RegistrarPage');
  }


  publicar(){
    if(this._userE.value!=="" && this._userPwd.value!==""){
      
      let obj:any={
      'id':Date.now(),  
      'username':this._userE.value,
      'userpasswd':this._userPwd.value
      
      }
    //console.log("======>"+this._desc.value)
    //this.servicio.publicar(obj); 
    this.servicio.editar(obj);
    
    // this.cargarData();

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
      this._userE.value="";
      this._userPwd.value="";    
    
  }

}
