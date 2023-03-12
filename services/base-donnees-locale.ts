import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Flavor } from './flavor';
import { Item } from './item';
import { Cat } from './cat';
import { Menucat } from './../src/app/services/menucat';
import { Menu } from './../src/app/services/menu';
import { Menuitem } from './../src/app/services/menuitem';
import { User } from './../src/app/services/user';

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Storage } from '@ionic/storage';
export interface Myitem {
    id:number;
    cat_id:number;
    name:string;
    description:string;
    image:string;
    url:string;
}

@Injectable({
  providedIn: 'root'
})
export class BaseDatosLocalProvider {
  private storage: SQLiteObject;
  itemsList = new BehaviorSubject([]);
arr: Item[] = [];
arrmenucat: Menucat[] = [];
arrmenu: Menu[] = [];
arrmenuitem: Menuitem[] = [];
usermcdo: User[] = [];
/*
boissons$: Observable<Menuitem[]> = of([]);
sauce$: Observable<Menuitem[]> = of([]);
accompagnement$: Observable<Menuitem[]> = of([]);
promotion$: Observable<Menuitem[]> = of([]);
promotiondessert$: Observable<Menuitem[]> = of([]);
extrasauce$: Observable<Menuitem[]> = of([]);
promotionpdt$: Observable<Menuitem[]> = of([]);
*/
  private boisson = new BehaviorSubject(this.arrmenuitem);
        boissons$ = this.boisson.asObservable();
  private users = new BehaviorSubject(this.usermcdo);
        users$ = this.users.asObservable();
          private menuitem = new BehaviorSubject(this.arrmenuitem);
        choisirItems$ = this.menuitem.asObservable();
  private sauce = new BehaviorSubject(this.arrmenuitem);
        sauce$ = this.sauce.asObservable();
          private accompagnement = new BehaviorSubject(this.arrmenuitem);
        accompagnement$ = this.accompagnement.asObservable();
          private promotion = new BehaviorSubject(this.arrmenuitem);
        promotion$ = this.promotion.asObservable();
          private promotiondessert = new BehaviorSubject(this.arrmenuitem);
        promotiondessert$ = this.promotiondessert.asObservable();
          private extrasauce = new BehaviorSubject(this.arrmenuitem);
        extrasauce$ = this.extrasauce.asObservable();
          private promotionpdt = new BehaviorSubject(this.arrmenuitem);
        promotionpdt$ = this.promotionpdt.asObservable();
             private manyitems = new BehaviorSubject(false);
        manyitems$ = this.manyitems.asObservable();
          private finditem = new BehaviorSubject(new Menuitem);
        finditemFound$ = this.finditem.asObservable();

  private burger = new BehaviorSubject(new Item);
        burgerFound$ = this.burger.asObservable();
  private prixitem = new BehaviorSubject(new Array);
        prixitemsnb$ = this.prixitem.asObservable();


  private itemsCatList = new BehaviorSubject(this.arr);
  
      itemListFilled$ = this.itemsCatList.asObservable();
      
        private mylistsauce = new BehaviorSubject(this.arr);
  
      mylistsauceFilled$ = this.mylistsauce.asObservable();
        private mylistextrasauce = new BehaviorSubject(this.arr);
  
      mylistextrasauceFilled$ = this.mylistextrasauce.asObservable();

      
  private menucat = new BehaviorSubject(new Menucat);
        menucatFound$ = this.menucat.asObservable();
  private menu = new BehaviorSubject(new Menu);
        menuFound$ = this.menu.asObservable();


  private menuCatList = new BehaviorSubject(this.arrmenucat);
  
      menuListFilled$ = this.menuCatList.asObservable();
      
        private menusList = new BehaviorSubject(this.arrmenu);
        menusFound$ = this.menusList.asObservable();

     private restosList = new BehaviorSubject(this.arrmenu);
        restosFound$ = this.restosList.asObservable();

           private serviceforfaitList = new BehaviorSubject(this.arrmenu);
        servicesforfaitsFound$ = this.serviceforfaitList.asObservable();
      
  private cat = new BehaviorSubject(new Flavor);
  
      catFound$ = this.cat.asObservable();

    private _missionAnnouncedSource = new BehaviorSubject("");
  missionAnnounced$ = this._missionAnnouncedSource.asObservable();
 value = new BehaviorSubject('10%');
     observable = this.value.asObservable();
      getProgress() {

    // Change this value with latest details


    // Create an async function
    const observer = async() => {
      // Perform all tasks in here
      const wait1 = await new Promise(resolve => setTimeout(resolve, 3000));
      this.value.next('66%');

      const wait2 = await new Promise(resolve => setTimeout(resolve, 3000));
      this.value.next('100%');

      // Complete observable
      this.value.complete();
    }

    // Call async function & return observable
    observer();
    return this.observable;
  }
    prix1item(typename,value,myid){
const observer = async() => {
         
          
          var x = await (this.storage.executeSql("select * from menuitems where type = ? and id = ?", [typename, value])
    .then(res => {
        //alert(JSON.stringify(res)+ JSON.stringify((res.rows.item(0))));
        let items=[];
 if (res.rows.length > 0) {
      //alert(JSON.stringify(res)+JSON.stringify(items)+ JSON.stringify((res.rows.item(0))));
      for (var i = 0; i < res.rows.length; i++) {
          console.log("prix:", res.rows.item(0).prix)
          console.log("ID:", res.rows.item(0).id)
          console.log("nombre:",1)
          console.log("prix < nombre:",res.rows.item(0).prix)
      items.push(res.rows.item(0).prix)
      }
         const initialValue = 0;
const sumWithInitial = items.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
console.log(sumWithInitial+":: sum")
      this.prixitem.next([typename,sumWithInitial,myid]);
 }
    }));
}
    observer()
    return this.prixitemsnb$;
}
 listsauces(array){
const observer = async() => {
            var myids=array.map(x=>x[0]);
            var mynbs=array.map(x=>Number(x[1]))
            //const flipped=  array.map(([key, value]) => [value, key]);
            var mynb={};
            for (var z = 0; z < array.length ;z++){
             mynb[array[z][0]] = array[z][1];   
            }
            console.log(mynb,"my array")
            var paspremier=false;
            var myidssql="";
            for (var i = 0; i < myids.length; i++) {
                if (paspremier) {
                    myidssql+=","
                }
                myidssql+="?";
                paspremier=true;
            }
          var x = await (this.storage.executeSql("select * from menuitems where id in ("+myidssql+")", myids)
    .then(res => {
        //alert(JSON.stringify(res)+ JSON.stringify((res.rows.item(0))));
        let items=[];
 if (res.rows.length > 0) {
      //alert(JSON.stringify(res)+JSON.stringify(items)+ JSON.stringify((res.rows.item(0))));
      for (var i = 0; i < res.rows.length; i++) {
          console.log("prix:", res.rows.item(0).prix)
          console.log("ID:", res.rows.item(0).id)
          console.log("nombre:",mynb[res.rows.item(0).id])
          console.log("prix < nombre:",res.rows.item(0).prix*mynb[res.rows.item(0).id])
      items.push({name:res.rows.item(0).name,nb: mynb[res.rows.item(0).id]})
      }
        
      this.mylistsauce.next(items);
 }
    }));
}
    observer()
    return this.prixitemsnb$;
}
 listextrasauces(array){
const observer = async() => {
            var myids=array.map(x=>x[0]);
            var mynbs=array.map(x=>Number(x[1]))
            //const flipped=  array.map(([key, value]) => [value, key]);
            var mynb={};
            for (var z = 0; z < array.length ;z++){
             mynb[array[z][0]] = array[z][1];   
            }
            console.log(mynb,"my array")
            var paspremier=false;
            var myidssql="";
            for (var i = 0; i < myids.length; i++) {
                if (paspremier) {
                    myidssql+=","
                }
                myidssql+="?";
                paspremier=true;
            }
          var x = await (this.storage.executeSql("select * from menuitems where id in ("+myidssql+")", myids)
    .then(res => {
        //alert(JSON.stringify(res)+ JSON.stringify((res.rows.item(0))));
        let items=[];
 if (res.rows.length > 0) {
      //alert(JSON.stringify(res)+JSON.stringify(items)+ JSON.stringify((res.rows.item(0))));
      for (var i = 0; i < res.rows.length; i++) {
          console.log("prix:", res.rows.item(0).prix)
          console.log("ID:", res.rows.item(0).id)
          console.log("nombre:",mynb[res.rows.item(0).id])
          console.log("prix < nombre:",res.rows.item(0).prix*mynb[res.rows.item(0).id])
      items.push({name:res.rows.item(0).name,nb: mynb[res.rows.item(0).id]})
      }
        
      this.mylistextrasauce.next(items);
 }
    }));
}
    observer()
    return this.prixitemsnb$;
}
  prixitemsnb(typename,array,myid){
const observer = async() => {
            var myids=array.map(x=>x[0]);
            var mynbs=array.map(x=>Number(x[1]))
            //const flipped=  array.map(([key, value]) => [value, key]);
            var mynb={};
            for (var z = 0; z < array.length ;z++){
             mynb[array[z][0]] = array[z][1];   
            }
            console.log(mynb,"my array")
            var paspremier=false;
            var myidssql="";
            for (var i = 0; i < myids.length; i++) {
                if (paspremier) {
                    myidssql+=","
                }
                myidssql+="?";
                paspremier=true;
            }
          var x = await (this.storage.executeSql("select * from menuitems where type = ? and id in ("+myidssql+")", [typename].concat(myids))
    .then(res => {
        //alert(JSON.stringify(res)+ JSON.stringify((res.rows.item(0))));
        let items=[];
 if (res.rows.length > 0) {
      //alert(JSON.stringify(res)+JSON.stringify(items)+ JSON.stringify((res.rows.item(0))));
      for (var i = 0; i < res.rows.length; i++) {
          console.log("prix:", res.rows.item(0).prix)
          console.log("ID:", res.rows.item(0).id)
          console.log("nombre:",mynb[res.rows.item(0).id])
          console.log("prix < nombre:",res.rows.item(0).prix*mynb[res.rows.item(0).id])
      items.push(res.rows.item(0).prix*mynb[res.rows.item(0).id])
      }
         const initialValue = 0;
const sumWithInitial = items.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
console.log(sumWithInitial+":: sum")
      this.prixitem.next([typename,sumWithInitial,myid]);
 }
    }));
}
    observer()
    return this.prixitemsnb$;
}
  getItemsByTypeName(typename){
const observer = async() => {
          var x = await (this.storage.executeSql("select * from menuitems where type = ?", [typename])
    .then(res => {
        //alert(JSON.stringify(res)+ JSON.stringify((res.rows.item(0))));
    let items: Menuitem[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) { 
         items.push({ 
            id: res.rows.item(i).id,
            name: res.rows.item(i).name,  
            image: res.rows.item(i).image,
            prix: res.rows.item(i).image,
            type: res.rows.item(i).description
           });
        }
      }
      //alert(JSON.stringify(res)+JSON.stringify(items)+ JSON.stringify((res.rows.item(0))));
      this.menuitem.next(items);
    }));
}
    observer()
    return this.choisirItems$;
}
getsauce(id){
const observer = async() => {
          var x = await (this.storage.executeSql("select * from menuitems where id = ?", [id])
    .then(res => {
        //alert(JSON.stringify(res)+ JSON.stringify((res.rows.item(0))));
    let items: Menuitem[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) { 
         items.push({ 
            id: res.rows.item(i).id,
            name: res.rows.item(i).name,  
            image: res.rows.item(i).image,
            prix: res.rows.item(i).image,
            type: res.rows.item(i).description
           });
        }
      }
      //alert(JSON.stringify(res)+JSON.stringify(items)+ JSON.stringify((res.rows.item(0))));
      this.sauce.next(items);
    }));
}
    observer()
    return this.sauce$;
}
getallmenus(){
const observer = async() => {
          var x = await (this.storage.executeSql("select * from menus", [])
    .then(res => {
        //alert(JSON.stringify(res)+ JSON.stringify((res.rows.item(0))));
    let items: Menu;
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) { 
         items={ 
            id: res.rows.item(i).id,
            name: res.rows.item(i).name,  
            image: res.rows.item(i).image,
            description: res.rows.item(i).image,
            url: res.rows.item(i).image,
            cat_id: res.rows.item(i).image,
            myorder: res.rows.item(i).image,
            prix: res.rows.item(i).image,
            type: res.rows.item(i).description
           };
        }
      }
      //alert(JSON.stringify(res)+JSON.stringify(items)+ JSON.stringify((res.rows.item(0))));
      this.menu.next(items);
    }));
}
}
createuser(emailcommercial,email,mdp,nom,tel){
const observer = async() => {
          var x = await (this.storage.executeSql("insert into users (emailcommercial,email,mdp,nom,tel) values (?,?,?,?,?)", [emailcommercial,email,mdp,nom,tel])
    .then(res => {
        //alert(JSON.stringify(res)+ JSON.stringify((res.rows.item(0))));
    let items: User[];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) { 
         items.push({ 
            id: res.rows.item(i).id,
            email: res.rows.item(i).email,  
            mdp: res.rows.item(i).mdp
            
           });
        }
      }
      //alert(JSON.stringify(res)+JSON.stringify(items)+ JSON.stringify((res.rows.item(0))));
      this.users.next(items);
    }));
}
observer();
return this.users$;
}
getallusersbyemail(email){
const observer = async() => {
          var x = await (this.storage.executeSql("select * from users where email = ?", [email])
    .then(res => {
        //alert(JSON.stringify(res)+ JSON.stringify((res.rows.item(0))));
    let items: User[];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) { 
         items.push({ 
            id: res.rows.item(i).id,
            email: res.rows.item(i).email,  
            mdp: res.rows.item(i).mdp
            
           });
        }
      }
      //alert(JSON.stringify(res)+JSON.stringify(items)+ JSON.stringify((res.rows.item(0))));
      this.users.next(items);
    }));
}
observer();
return this.users$;
}
getallusers(email,mdp){
const observer = async() => {
          var x = await (this.storage.executeSql("select * from users where email = ? and mdp = ?", [email,mdp])
    .then(res => {
        //alert(JSON.stringify(res)+ JSON.stringify((res.rows.item(0))));
    let items: User[];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) { 
         items.push({ 
            id: res.rows.item(i).id,
            email: res.rows.item(i).email,  
            mdp: res.rows.item(i).mdp
            
           });
        }
      }
      //alert(JSON.stringify(res)+JSON.stringify(items)+ JSON.stringify((res.rows.item(0))));
      this.users.next(items);
    }));
}
observer();
return this.users$;
}
getmenu(id){
const observer = async() => {
          var x = await (this.storage.executeSql("select * from menus where id = ?", [id])
    .then(res => {
        //alert(JSON.stringify(res)+ JSON.stringify((res.rows.item(0))));
    let items: Menu;
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) { 
         items={ 
            id: res.rows.item(i).id,
            name: res.rows.item(i).name,  
            image: res.rows.item(i).image,
            description: res.rows.item(i).image,
            url: res.rows.item(i).image,
            cat_id: res.rows.item(i).image,
            myorder: res.rows.item(i).image,
            prix: res.rows.item(i).image,
            type: res.rows.item(i).description
           };
        }
      }
      //alert(JSON.stringify(res)+JSON.stringify(items)+ JSON.stringify((res.rows.item(0))));
      this.menu.next(items);
    }));
}
    observer()
    return this.menuFound$;
}
getsauces(){
const observer = async() => {
          var x = await (this.storage.executeSql("select * from menuitems where type = ?", ["sauce"])
    .then(res => {
        //alert(JSON.stringify(res)+ JSON.stringify((res.rows.item(0))));
    let items: Menuitem[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) { 
         items.push({ 
            id: res.rows.item(i).id,
            name: res.rows.item(i).name,  
            image: res.rows.item(i).image,
            prix: res.rows.item(i).image,
            type: res.rows.item(i).description
           });
        }
      }
      //alert(JSON.stringify(res)+JSON.stringify(items)+ JSON.stringify((res.rows.item(0))));
      this.sauce.next(items);
    }));
}
    observer()
    return this.sauce$;
}
getextrasauce(id){
const observer = async() => {
          var x = await (this.storage.executeSql("select * from menuitems where id = ?", [id])
    .then(res => {
        //alert(JSON.stringify(res)+ JSON.stringify((res.rows.item(0))));
    let items: Menuitem[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) { 
         items.push({ 
            id: res.rows.item(i).id,
            name: res.rows.item(i).name,  
            image: res.rows.item(i).image,
            prix: res.rows.item(i).image,
            type: res.rows.item(i).description
           });
        }
      }
      //alert(JSON.stringify(res)+JSON.stringify(items)+ JSON.stringify((res.rows.item(0))));
      this.extrasauce.next(items);
    }));
}
    observer()
    return this.extrasauce$;
}
getextrasauces(){
const observer = async() => {
          var x = await (this.storage.executeSql("select * from menuitems where type = ?", ["extra sauces"])
    .then(res => {
        //alert(JSON.stringify(res)+ JSON.stringify((res.rows.item(0))));
    let items: Menuitem[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) { 
         items.push({ 
            id: res.rows.item(i).id,
            name: res.rows.item(i).name,  
            image: res.rows.item(i).image,
            prix: res.rows.item(i).image,
            type: res.rows.item(i).description
           });
        }
      }
      //alert(JSON.stringify(res)+JSON.stringify(items)+ JSON.stringify((res.rows.item(0))));
      this.extrasauce.next(items);
    }));
}
    observer()
    return this.extrasauce$;
}
getaccompagnement(id){
const observer = async() => {
          var x = await (this.storage.executeSql("select * from menuitems where id = ?", [id])
    .then(res => {
        //alert(JSON.stringify(res)+ JSON.stringify((res.rows.item(0))));
    let items: Menuitem[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) { 
         items.push({ 
            id: res.rows.item(i).id,
            name: res.rows.item(i).name,  
            image: res.rows.item(i).image,
            prix: res.rows.item(i).image,
            type: res.rows.item(i).description
           });
        }
      }
      //alert(JSON.stringify(res)+JSON.stringify(items)+ JSON.stringify((res.rows.item(0))));
      this.accompagnement.next(items);
    }));
}
    observer()
    return this.accompagnement$;
}
getaccompagnements(){
const observer = async() => {
          var x = await (this.storage.executeSql("select * from menuitems where type = ?", ["accompagnement"])
    .then(res => {
        //alert(JSON.stringify(res)+ JSON.stringify((res.rows.item(0))));
    let items: Menuitem[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) { 
         items.push({ 
            id: res.rows.item(i).id,
            name: res.rows.item(i).name,  
            image: res.rows.item(i).image,
            prix: res.rows.item(i).image,
            type: res.rows.item(i).description
           });
        }
      }
      //alert(JSON.stringify(res)+JSON.stringify(items)+ JSON.stringify((res.rows.item(0))));
      this.accompagnement.next(items);
    }));
}
    observer()
    return this.accompagnement$;
}
getpromotion(id){
const observer = async() => {
          var x = await (this.storage.executeSql("select * from menuitems where id = ?", [id])
    .then(res => {
        //alert(JSON.stringify(res)+ JSON.stringify((res.rows.item(0))));
    let items: Menuitem[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) { 
         items.push({ 
            id: res.rows.item(i).id,
            name: res.rows.item(i).name,  
            image: res.rows.item(i).image,
            prix: res.rows.item(i).image,
            type: res.rows.item(i).description
           });
        }
      }
      //alert(JSON.stringify(res)+JSON.stringify(items)+ JSON.stringify((res.rows.item(0))));
      this.promotion.next(items);
    }));
}
    observer()
    return this.promotion$;
}
getpromotions(){
const observer = async() => {
          var x = await (this.storage.executeSql("select * from menuitems where type = ?", ["promotion"])
    .then(res => {
        //alert(JSON.stringify(res)+ JSON.stringify((res.rows.item(0))));
    let items: Menuitem[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) { 
         items.push({ 
            id: res.rows.item(i).id,
            name: res.rows.item(i).name,  
            image: res.rows.item(i).image,
            prix: res.rows.item(i).image,
            type: res.rows.item(i).description
           });
        }
      }
      //alert(JSON.stringify(res)+JSON.stringify(items)+ JSON.stringify((res.rows.item(0))));
      this.promotion.next(items);
    }));
}
    observer()
    return this.promotion$;
}
getpromotiondessert(id){
const observer = async() => {
          var x = await (this.storage.executeSql("select * from menuitems where id = ?", [id])
    .then(res => {
        //alert(JSON.stringify(res)+ JSON.stringify((res.rows.item(0))));
    let items: Menuitem[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) { 
         items.push({ 
            id: res.rows.item(i).id,
            name: res.rows.item(i).name,  
            image: res.rows.item(i).image,
            prix: res.rows.item(i).image,
            type: res.rows.item(i).description
           });
        }
      }
      //alert(JSON.stringify(res)+JSON.stringify(items)+ JSON.stringify((res.rows.item(0))));
      this.promotiondessert.next(items);
    }));
}
    observer()
    return this.promotiondessert$;
}
getpromotiondesserts(){
const observer = async() => {
          var x = await (this.storage.executeSql("select * from menuitems where type = ?", ["promotion dessert"])
    .then(res => {
        //alert(JSON.stringify(res)+ JSON.stringify((res.rows.item(0))));
    let items: Menuitem[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) { 
         items.push({ 
            id: res.rows.item(i).id,
            name: res.rows.item(i).name,  
            image: res.rows.item(i).image,
            prix: res.rows.item(i).image,
            type: res.rows.item(i).description
           });
        }
      }
      //alert(JSON.stringify(res)+JSON.stringify(items)+ JSON.stringify((res.rows.item(0))));
      this.promotiondessert.next(items);
    }));
}
    observer()
    return this.promotiondessert$;
}
getboisson(id){
const observer = async() => {
          var x = await (this.storage.executeSql("select * from menuitems where id = ?", [id])
    .then(res => {
        //alert(JSON.stringify(res)+ JSON.stringify((res.rows.item(0))));
    let items: Menuitem[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) { 
         items.push({ 
            id: res.rows.item(i).id,
            name: res.rows.item(i).name,  
            image: res.rows.item(i).image,
            prix: res.rows.item(i).image,
            type: res.rows.item(i).description
           });
        }
      }
      //alert(JSON.stringify(res)+JSON.stringify(items)+ JSON.stringify((res.rows.item(0))));
      this.boisson.next(items);
    }));
}
    observer()
    return this.boissons$;
}

getboissons(){
const observer = async() => {
          var x = await (this.storage.executeSql("select * from menuitems where type = ?", ["boisson"])
    .then(res => {
        //alert(JSON.stringify(res)+ JSON.stringify((res.rows.item(0))));
    let items: Menuitem[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) { 
         items.push({ 
            id: res.rows.item(i).id,
            name: res.rows.item(i).name,  
            image: res.rows.item(i).image,
            prix: res.rows.item(i).image,
            type: res.rows.item(i).description
           });
        }
      }
      //alert(JSON.stringify(res)+JSON.stringify(items)+ JSON.stringify((res.rows.item(0))));
      this.boisson.next(items);
    }));
}
    observer()
    return this.boissons$;
}
get1promotionpdt(id){
const observer = async() => {
          var x = await (this.storage.executeSql("select * from menuitems where id = ?", [id])
    .then(res => {
        //alert(JSON.stringify(res)+ JSON.stringify((res.rows.item(0))));
    let items: Menuitem[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) { 
         items.push({ 
            id: res.rows.item(i).id,
            name: res.rows.item(i).name,  
            image: res.rows.item(i).image,
            prix: res.rows.item(i).image,
            type: res.rows.item(i).description
           });
        }
      }
      //alert(JSON.stringify(res)+JSON.stringify(items)+ JSON.stringify((res.rows.item(0))));
      this.promotionpdt.next(items);
    }));
}
    observer()
    return this.promotionpdt$;
}
getpromotionpdt(){
const observer = async() => {
          var x = await (this.storage.executeSql("select * from menuitems where type = ?", ["promotion pommes de terre"])
    .then(res => {
        //alert(JSON.stringify(res)+ JSON.stringify((res.rows.item(0))));
    let items: Menuitem[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) { 
         items.push({ 
            id: res.rows.item(i).id,
            name: res.rows.item(i).name,  
            image: res.rows.item(i).image,
            prix: res.rows.item(i).image,
            type: res.rows.item(i).description
           });
        }
      }
      //alert(JSON.stringify(res)+JSON.stringify(items)+ JSON.stringify((res.rows.item(0))));
      this.promotionpdt.next(items);
    }));
}
    observer()
    return this.promotionpdt$;
}
   getItemsByCatUrl(id): Observable<Item[]> {
       
const observer = async() => {
       
          var x = await (this.storage.executeSql("select items.*, flavors.url as myurl,flavors.id as myid FROM items left join flavors on flavors.id = items.cat_id group by items.id having myurl like ?", [id])
    .then(res => {
        //alert(JSON.stringify(res)+ JSON.stringify((res.rows.item(0))));
    let items: Item[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) { 
        
         items.push({ 
            id: res.rows.item(i).id,
            name: res.rows.item(i).name,  
            image: res.rows.item(i).image,
            cat_id: res.rows.item(i).cat_id,
            url: res.rows.item(i).url,
            description: res.rows.item(i).description
           });
          
        }
      }
      //alert(JSON.stringify(res)+JSON.stringify(items)+ JSON.stringify((res.rows.item(0))));
      this.itemsCatList.next(items);
        

    }));

}
    observer()
   
    return this.itemListFilled$;
}


   
        
  
  announceMission(mission: string) {
    this._missionAnnouncedSource.next(mission)
  }

  catsList = new BehaviorSubject([]);
  postsList = new BehaviorSubject([]);
  campaignsList = new BehaviorSubject([]);
  database: SQLiteObject;

  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(
    private platform: Platform, 
    private sqlite: SQLite, 
    private httpClient: HttpClient,
    private sqlPorter: SQLitePorter,
  ) {
      
      
    this.platform.ready().then(() => {
this.createDatabaseObject()
      
    });
  }
  createDatabaseObject(): void {
      this.sqlite.create({
        name: 'my_otherdb_name.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
          console.log(db)
          
                    this.storage = db;
          this.getFakeData();
      });
  }
   
  
  getDatabaseState() {
    return this.isDbReady.asObservable();
  }
 
  fetchItems(): Observable<Item[]> {
    return this.itemsList.asObservable();
  }
   
    // Render fake data
    
  // Get list
  getItems(){
    return this.storage.executeSql('SELECT * FROM menuitems', []).then(res => {
      let items: Item[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) { 
          items.push({ 
            id: res.rows.item(i).id,
            name: res.rows.item(i).name,  
            image: res.rows.item(i).image,
            cat_id: res.rows.item(i).cat_id,
            url: res.rows.item(i).url,
            description: res.rows.item(i).description
           });
        }
      }
      this.itemsList.next(items);
    });
  }
  getMenucats(){
    return this.storage.executeSql('SELECT * FROM menucats', []).then(res => {
      let items: Menucat[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) { 
          items.push({ 
            id: res.rows.item(i).id,
            name: res.rows.item(i).name,  
            image: res.rows.item(i).image,
            url: res.rows.item(i).url,
            description: res.rows.item(i).description
           });
        }
      }
      this.menuCatList.next(items);
    });
  }
   getResto(){
    return this.storage.executeSql('SELECT * FROM menus where type = ?', ["restaurant"]).then(res => {
      let items: Menu[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) { 
          items.push({ 
            id: res.rows.item(i).id,
            name: res.rows.item(i).name,  
            image: res.rows.item(i).image,
            myorder: res.rows.item(i).myorder,
            url: res.rows.item(i).url,
            prix: res.rows.item(i).prix,
            type: res.rows.item(i).type,
            cat_id: res.rows.item(i).cat_id,
            description: res.rows.item(i).description
           });
        }
      }
      this.restosList.next(items);
    });
  }
     getServicedeforfait(){
    return this.storage.executeSql('SELECT * FROM menus where type = ?', ["service de forfait"]).then(res => {
      let items: Menu[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) { 
          items.push({ 
            id: res.rows.item(i).id,
            name: res.rows.item(i).name,  
            image: res.rows.item(i).image,
            myorder: res.rows.item(i).myorder,
            url: res.rows.item(i).url,
            prix: res.rows.item(i).prix,
            type: res.rows.item(i).type,
            cat_id: res.rows.item(i).cat_id,
            description: res.rows.item(i).description
           });
        }
      }
      this.serviceforfaitList.next(items);
    });
  }
  getCats(){
    return this.storage.executeSql('SELECT * FROM flavors', []).then(res => {
      let cats: Flavor[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) { 
          cats.push({ 
            id: res.rows.item(i).id,
            name: res.rows.item(i).name,  
            image: res.rows.item(i).image,
            url: res.rows.item(i).url,
            description: res.rows.item(i).description
           });
        }
      }
      
      this.catsList.next(cats);
    });
  }
  getFakeData() {
      this.httpClient.get(
        'assets/dump.sql', 
        {responseType: 'text'}
      ).subscribe(data => {
          //alert("this data"+data)
        this.sqlPorter.importSqlToDb(this.storage, data)
          .then(_ => {
this.storage['database_filled'] = true;
this.getItems();
            this.isDbReady.next(true);
            
          })
          .catch(error => console.error(error));
      });
    }
  // Add
  addItem(name, image) {
    let data = [name, image];
    return this.storage.executeSql('INSERT INTO items (name, image) VALUES (?, ?)', data)
    .then(res => {
      this.getItems();
    });
  }

 
  // Get single object
  getItem(id): Observable<Menuitem> {
 const observer = async() => {
       
          var x = await (this.storage.executeSql('SELECT * FROM items WHERE id = ?', [id]).then(res => { 
    

      this.finditem.next({
        id: res.rows.item(0).id,
            name: res.rows.item(0).name,  
            type: res.rows.item(0).type,  
            image: res.rows.item(0).image,
            prix: res.rows.item(0).prix
      })
    }));
  }
  observer();
  return this.finditemFound$;
   }
  
  
   findMenuById(id): Observable<Menu> {
 const observer = async() => {
       
          var x = await (this.storage.executeSql('SELECT * FROM menus WHERE id = ?', [id]).then(res => { 
    

      this.menu.next({
        id: res.rows.item(0).id,
            cat_id: res.rows.item(0).cat_id,  
            name: res.rows.item(0).name,  
            image: res.rows.item(0).image,
            prix: res.rows.item(0).prix,
            type: res.rows.item(0).type,
            myorder: res.rows.item(0).myorder,
            url: res.rows.item(0).url,
            description: res.rows.item(0).description
      })
    }));
  }
  observer();
  return this.menuFound$;
   }
  
  getItemByUrl(id): Observable<Item> {
 const observer = async() => {
       
          var x = await (this.storage.executeSql('SELECT * FROM items WHERE url = ?', [id]).then(res => { 
    var xx = this.getCatById(res.rows.item(0).cat_id);

      this.burger.next({
        id: res.rows.item(0).id,
            cat_id: res.rows.item(0).cat_id,  
            name: res.rows.item(0).name,  
            image: res.rows.item(0).image,
            url: res.rows.item(0).url,
            description: res.rows.item(0).description
      })
    }));
  };
  observer();
    return this.burgerFound$;
  }
  // Update
  updateItem(id, item: Item) {
    let data = [item.name, item.image];
    return this.storage.executeSql(`UPDATE items SET name = ?, image = ? WHERE id = ${id}`, data)
    .then(data => {
      this.getItems();
    })
  }
  // Delete
  deleteItem(id) {
    return this.storage.executeSql('DELETE FROM items WHERE id = ?', [id])
    .then(_ => {
      this.getItems();
    });
  }
  getItemsByCat(id) {
    return this.storage.executeSql('select * FROM items WHERE cat_id = ?', [id])
    .then(_ => {
      this.getItems();
    });
  }
    getMenuCatByUrl(id): Observable<Menucat> {
  const observer = async() => {
       
          var x = await (this.storage.executeSql('SELECT * FROM menucats WHERE url = ?', [id]).then(res => { 
    this.getMenusByMenuCatId(res.rows.item(0).id);
      this.menucat.next({
        id: res.rows.item(0).id,
            name: res.rows.item(0).name,  
            image: res.rows.item(0).image,
            url: res.rows.item(0).url,
            description: res.rows.item(0).description
      })
    }));
  }
  observer();
    return this.menucatFound$;
  }
    getMenusByMenuCatId(id){
    return this.storage.executeSql('SELECT * FROM menus where cat_id = ?', [id]).then(res => {
      let menus: Menu[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) { 
          menus.push({ 
            id: res.rows.item(i).id,
            name: res.rows.item(i).name,  
            myorder: res.rows.item(i).myorder,  
            image: res.rows.item(i).image,
            prix: res.rows.item(i).prix,
            url: res.rows.item(i).url,
            cat_id: res.rows.item(i).cat_id,
            type: res.rows.item(i).cat_id,
            description: res.rows.item(i).description
           });
        }
      }
      
      this.menusList.next(menus);
    });
  }
  getCatByUrl(id): Observable<Flavor> {
  const observer = async() => {
       
          var x = await (this.storage.executeSql('SELECT * FROM flavors WHERE url = ?', [id]).then(res => { 
    
      this.cat.next({
        id: res.rows.item(0).id,
            name: res.rows.item(0).name,  
            image: res.rows.item(0).image,
            url: res.rows.item(0).url,
            description: res.rows.item(0).description
      })
    }));
  }
  observer();
    return this.catFound$;
  }
  getCatById(id): Observable<Flavor> {
    const observer = async() => {
       
          var x = await (this.storage.executeSql('SELECT * FROM flavors WHERE id = ?', [id]).then(res => { 
    
      this.cat.next({
        id: res.rows.item(0).id,
            name: res.rows.item(0).name,  
            image: res.rows.item(0).image,
            url: res.rows.item(0).url,
            description: res.rows.item(0).description
      })
    }));
  }
  observer();
    return this.catFound$;
  }
  
 
}

