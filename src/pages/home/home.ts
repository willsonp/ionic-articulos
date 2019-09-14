import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DatailsPage } from '../datails/datails';
import { ArticulosServices } from '../../services/articulosServices';
import { NewpostsPage } from '../newposts/newposts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  arti=[];
  user:String;
  data:any;
  constructor(public navCtrl: NavController, public navParam: NavParams,public servicio: ArticulosServices) {

    //tomar el usuario que se loqueo...
    this.user=this.navParam.get('user');
    //declaramos el arreglo de objetos
    // this.arti = [
    //   {
    //     'title': 'Angular',
    //     'icon': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQill4zwwLxOUFaw9GnagHm5gMuGqxqGvcOLNLvDDiA241Xhbtf',
    //     'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
    //     'color': '#E63135'
    //   },
    //   {
    //     'title': 'CSS3',
    //     'icon': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAwECeaAoRTqyYxYmDw3RkDsjRxHwL2CQAi0fQZwkx4J1_8l-E',
    //     'description': 'The latest version of cascading stylesheets - the styling language of the web!',
    //     'color': '#0CA9EA'
    //   },
    //   {
    //     'title': 'HTML5',
    //     'icon': 'https://gcdn.emol.cl/internet/files/2012/04/html-5.jpg',
    //     'description': 'The latest version of the web\'s markup language.',
    //     'color': '#F46529'
    //   },
    //   {
    //     'title': 'JavaScript',
    //     'icon': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/245px-Unofficial_JavaScript_logo_2.svg.png',
    //     'description': 'One of the most popular programming languages on the Web!',
    //     'color': '#FFD439'
    //   },
    //   {
    //     'title': 'Sass',
    //     'icon': 'https://www.mugo.ca/var/ezwebin_site/storage/images/media/images/sass-blog-post-image01/315767-1-eng-US/sass-blog-post-image01_reference.jpg',
    //     'description': 'Syntactically Awesome Stylesheets - a mature, stable, and powerful professional grade CSS extension.',
    //     'color': '#CE6296'
    //   },
    //   {
    //     'title': 'NodeJS',
    //     'icon': 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
    //     'description': 'An open-source, cross-platform runtime environment for developing server-side Web applications.',
    //     'color': '#78BD43'
    //   },
    //   {
    //     'title': 'Python',
    //     'icon': 'https://www.linuxadictos.com/wp-content/uploads/python-logo-1.jpg',
    //     'description': 'A clear and powerful object-oriented programming language!',
    //     'color': '#3575AC'
    //   },
    //   {
    //     'title': 'Markdown',
    //     'icon': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSgsyqbgY4iRpjnfmWk3a7-T6g7qiVPwbPWGAbH3DJ6RcPKV--Zw',
    //     'description': 'A super simple way to add formatting like headers, bold, bulleted lists, and so on to plain text.',
    //     'color': '#412159'
    //   },
    //   {
    //     'title': 'Tux',
    //     'icon': 'https://cdn.pixabay.com/photo/2017/01/31/15/33/linux-2025130_960_720.png',
    //     'description': 'The official mascot of the Linux kernel!',
    //     'color': '#000'
    //   }
    // ]   

    this.cargarData();
  }
  //aqui cuando llamamos el detalle de la opcion le pasamos el objeto completo
  openNavDetailsPage(item: any) {
     this.navCtrl.push(DatailsPage, { item: item });
   }
    
  createNewPost() {
    this.navCtrl.push(NewpostsPage);
  }
  
  //para cargar los datos
  cargarData(){
    this.servicio.getPost().valueChanges().subscribe((post=>{
       this.data = post;
       console.log(this.data)          
       // this.mosTrar(this.data);    
    }));
   
  }
  deletePost(id:any)
  {
     this.servicio.eliminarPost(id);
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