import {AngularFireDatabase} from "@angular/fire/database";
import {Injectable} from "@angular/core";

@Injectable()
export class ArticulosServices{
    constructor(public AFD: AngularFireDatabase){
     
    }
    public publicar(obj:any){
      this.AFD.database.ref('articulos').push(obj);
    }

    public getPost(){
      let a:any = [];
      this.AFD.list('articulos').valueChanges().subscribe((post=>{
        a = post;       
      }));
      return a;
    }
}
