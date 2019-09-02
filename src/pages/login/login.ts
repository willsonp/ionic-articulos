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
  xintentos=0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public servicio: LoginServices) {
    //consultar los usuarios
    this.cargarData();
    this.load=JSON.stringify(this.data);
    
  }

  //metodo para validar usuario y password
  entrar(){

     //consultar los usuarios
    //this.cargarData();
    var xusername=this._userN.value;
    
    let xuser=this.data.find(user=> user.username===xusername)
    
    if(xuser===undefined||xuser===''){
      console.log(xuser);
      const alert = this.alertCtrl.create({
        title: 'Valor Incorrecto!',
        subTitle: 'Favor Verificaque User y Passwd! '+ this._userN.value,
        buttons: ['OK']
      });
      alert.present();
      this.xintentos++;
      if(this.xintentos>3){
        this.register(); //llammar el registro  
      }
      return
    }
   //Solo Entrar si usuario y Password son Validos
    if(this._userN.value===xuser.username && this._userPwd.value===xuser.userpasswd){
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
      if(this.xintentos<3){
      
      this.xintentos++;
      const alert = this.alertCtrl.create({
        title: 'Login Incorrecto!',
        subTitle: 'Por Favor Introduzca User and Password Valido! '+ this._userN.value,
        buttons: ['OK']
      });
      alert.present();
      return      
    }else{
        const alert = this.alertCtrl.create({
          title: 'Por Favor Registrese..!',
          subTitle: 'Ha excedido el Numero permitido de Intentos,Debe Registrarse antes de Ingresar a la Aplicacion! ',
          buttons: ['OK']
        });
        alert.present();
      this.register();
      
    }
    
    }
  }

  //metodo para limpiar valores
  register(){
    //llamar el regsitro y asiganr valor en blanco

    this.navCtrl.push(RegistrarPage);
    this._userN.value="";
    this._userPwd.value="";    
    
  }
  //para cargar los Usuarios registrados
  async cargarData(){
    await this.servicio.getPost().valueChanges().subscribe((post=>{
       this.data = post;
       console.log(this.data)
    }));

}
}
