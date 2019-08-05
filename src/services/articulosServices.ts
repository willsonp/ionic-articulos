import {AngularFireDatabase} from "@angular/fire/database";
import {Injectable} from "@angular/core";

@Injectable()
export class ArticulosServices{
    constructor(public AFD: AngularFireDatabase){
     
    }
    publicar(obj:any){
      this.AFD.database.ref('articulos').push(obj);
    }
}
