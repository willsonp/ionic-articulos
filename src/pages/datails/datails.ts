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
   data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public servicio: ArticulosServices, public alertCtrl: AlertController) {

    this.servicio.getPost();
    this.item=this.navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatailsPage');
    this.cargarData();
  }

  publicar(){
    if(this._desc.value!=="" && this._tiTle.value!==""){
      
      let obj:any={
      'id':Date.now(),  
      'titulo':this._tiTle.value,
      'descripcion':this._desc.value,
      'likes':0,
      'unlikes':0,        
      'url':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQill4zwwLxOUFaw9GnagHm5gMuGqxqGvcOLNLvDDiA241Xhbtf'
      }
    //console.log("======>"+this._desc.value)
    //this.servicio.publicar(obj); 
    this.servicio.editar(obj);
    
    this.cargarData();

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
  //para cargar los datos
  cargarData(){
       this.servicio.getPost().valueChanges().subscribe((post=>{
          this.data = post;
          console.log(this.data)          
          // this.mosTrar(this.data);    
       }));
   
  }
  
  doLikes(id:any){
    id.likes++;
    console.log(id.likes);
    
    this.servicio.editar(id);
  }
  
  doUnLikes(id:any){
     
    id.unlikes++;
    console.log(id.likes);
    this.servicio.editar(id);
  }
}