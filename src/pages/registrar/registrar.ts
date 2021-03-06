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
  load :any;
  constructor(public navCtrl: NavController, public navParams: NavParams ,public servicio: LoginServices,public alertCtrl: AlertController) {
    this.cargarData();
  }

  register() {
    console.log('ionViewDidLoad RegistrarPage');
  }

  
  publicar(){
    if(this._userE.value!=="" && this._userPwd.value!==""){
      
      let obj:any={
      'id':Date.now(),  
      'username':this._userE.value,
      'userpasswd':this._userPwd.value,
      'userLevel':this.load
      
      
      }
    //verificar si el usuario ya esta registrado
      let xuserregistred=this._userE.value
      let xuser=this.data.find(user=> user.username===xuserregistred)
    
      if(xuser!==undefined){
        console.log(xuser);

        const alert = this.alertCtrl.create({
          title: 'Validacion de Usuario!',
          subTitle: 'Favor Verifique User ya Existe intente otro Diferente!  ',
          buttons: ['OK']
        });
        alert.present();
        return
      }//hasta aqui verificacion de usuario

      //this.servicio.publicar(obj); 

      this.servicio.editar(obj);
      this.cargarData();
  
  
      this.limpiarValores();
    }else{
       const alert = this.alertCtrl.create({
        title: 'Control!',
        subTitle: 'NO se permite dejar el Valor Email o Password en Blanco, Favor Llenarlo! ',
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

  cargarData(){
    this.servicio.getPost().valueChanges().subscribe((post=>{
       this.data = post;
       console.log(this.data)          
    }));

}
  showSelectValue(userLevel: any) {
  this.load=userLevel;
  console.log(this.load);
  }
}
