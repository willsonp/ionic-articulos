import {AngularFireDatabase} from "@angular/fire/database";
import {Injectable} from "@angular/core";

@Injectable()
export class LoginServices{
    constructor(public AFD:AngularFireDatabase){
     
    }
    // //agregar un dato en la DB
    // public publicar(obj:any){
    //   this.AFD.database.ref('articulos').push(obj);
    // }

    //obtener los datos y devolverlos como obj
    public getPost(){
      return this.AFD.list('users');
    }
    //para editar  agregar en caso no exista
    public editar(obj:any){
      this.AFD.database.ref('users/'+obj.id).set(obj);
    }

     
}