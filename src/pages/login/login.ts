import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RegistrarPage } from '../registrar/registrar';
import { LoginServices } from '../../services/loginService';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  @ViewChild('userName') _userN;
  @ViewChild('userPasswd') _userPwd;  
  data:any;
  load:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public servicio: LoginServices) {
  }

  //metodo para validar usuario y password
  entrar(){

    //consultar los usuarios
    this.cargarData();

    //rocorrer la data cargada desde la DB
    for(let i=0; i < this.data; i++){ // n is array.length
      this.load.push({  username : this.data[i] , passwd : this.data[i] });
      console.log('===>'+this.load);
   }

   
    if(this._userN.value==="admin" && this._userPwd.value==="admin"){
      //
      const alert = this.alertCtrl.create({
        title: 'Login Sucessful!',
        subTitle: 'Bienvenid@! '+ this._userN.value,
        buttons: ['OK']
      });
      alert.present();
      //Llamar el Menu pero no ponerlo pagina inicio
      //this.navCtrl.push(HomePage,{user:this._userN.value});

      //para llamar y establecer como pagina de inicio o principal
      this.navCtrl.setRoot(HomePage,{user:this._userN.value});
    }else{
      const alert = this.alertCtrl.create({
        title: 'Login Incorrecto!',
        subTitle: 'Por Favor Introduzca User and Password Valido! '+ this._userN.value,
        buttons: ['OK']
      });
      alert.present();
      return      
    }
  }

  //metodo para limpiar valores
  cacelar(){
    // const alert = this.alertCtrl.create({
    //   title: 'Login Canceled!',
    //   subTitle: 'Accion Cancelada! ',
    //   buttons: ['OK']
    // });
    // alert.present();
    //asiganr valor en blanco
    this.navCtrl.push(RegistrarPage);
    this._userN.value="";
    this._userPwd.value="";    
    
  }
  //para cargar los Usuarios registrados
  cargarData(){
    this.servicio.getPost().valueChanges().subscribe((post=>{
       this.data = post;
       console.log(this.data)          
    }));

}
}
