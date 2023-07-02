import {Injectable} from '@angular/core';
import {take} from 'rxjs';
import { Storage } from '@ionic/storage-angular';
import { BaseDatosLocalProvider } from './base-donnees-locale';
import { BehaviorSubject, Observable } from 'rxjs';
import { of, map,Subscription } from 'rxjs';
import { Item } from './item';
import { Menucat } from '../src/app/services/menucat';
import { Menu } from '../src/app/services/menu';
import { Menuitem } from '../src/app/services/menuitem';
import { ActivatedRoute, Router, NavigationExtras} from '@angular/router';
import { ActivationStart } from '@angular/router';
import { ElementRef,ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { IonModal,IonItem } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { AnimationController,ModalController } from '@ionic/angular';
import { ModalPage } from '../src/app/menumodal/modal.page';
import { PanierPage } from '../src/app/menupanier/modal.page';
import { Order } from '../src/app/services/order';

import { FormGroup, FormBuilder, Validators,FormControl } from "@angular/forms";
import { Component, OnInit,OnDestroy } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService implements OnInit, OnDestroy {
  private isServiceReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

    private loggedIn = new BehaviorSubject<boolean>(false);
    private ordered = new BehaviorSubject<boolean>(false);
    private myorder = new BehaviorSubject<object>([]);
        loggedIn$ = this.loggedIn.asObservable();
        ordered$ = this.ordered.asObservable();
        myorder$ = this.myorder.asObservable();
        orders;
    constructor(private storage: Storage,public db: BaseDatosLocalProvider) {
        this.isServiceReady.next(true);
        }
    async local(key, value?:any) {
    if(value === undefined) {
        return await this.storage.get(key);
    }

    return this.storage.set(key, value);
}
private _burger_o: Subscription;
private _boisson1_o: Subscription;
private _boisson2_o: Subscription;
private _accomp_o: Subscription;
private _sauce_o: Subscription;
private _promo_o: Subscription;
private _promodessert_o: Subscription;
private _extrasauce_o: Subscription;
private _viandesup_o: Subscription;
private _extrachicken_o: Subscription;
private _dbobservable: Subscription;


ngOnDestroy (){
      console.log("destroy service AUTH")
      /*HASH DE LA COMMANDE{
  "myid1": "2",
  "boisson1": "2",
  "boisson2": "3",
  "accomp": "7",
  "sauce": "[[5,'1']]",
  "promo": "10",
  "promodessert": "16",
  "extrasauce": "[[23,'1']]",
  "promopdt": "",
  "viandesup": true,
  "extrachicken": false
}*/
this._burger_o.unsubscribe();
this._boisson1_o.unsubscribe();

this._boisson2_o.unsubscribe();
this._accomp_o.unsubscribe();
this._sauce_o.unsubscribe();
this._promo_o.unsubscribe();
this._promodessert_o.unsubscribe();
this._extrasauce_o.unsubscribe();
this._viandesup_o.unsubscribe();
this._extrachicken_o.unsubscribe();
this._dbobservable.unsubscribe();
}
  getServiceState() {
    return this.isServiceReady.asObservable();
  }

async ngOnInit(){
            this.ordered.next(await this.storage.get("ordered"))
        this.isServiceReady.next(true);
                  this._dbobservable = this.db.getDatabaseState().subscribe((res) => {
      if(res){

        this._sauce_o=this.db.mylistsauceFilled$.subscribe(x=>{
            this.myitem["sauce"] = x;
            this.storage.set('macommande', this.myitem);
        });
        this._extrasauce_o=this.db.mylistextrasauceFilled$.subscribe(x=>{

            this.myitem["extrasauce"] = x;
            this.storage.set('macommande', this.myitem); // store session data
        });
             this.db.boisson1$.subscribe(x=>{
                                           console.log(" B OI SSOSN 1", this.myitem["boisson1"], this.myitem["boisson1"].constructor !== Object);


            this.myitem["boisson1"] = x[0];
            this.storage.set('macommande', this.myitem);
        });
        this._boisson2_o=this.db.boisson2$.subscribe(x=>{
        alert(JSON.stringify(x));
            this.myitem["boisson2"] = x[0];
            this.storage.set('macommande', this.myitem); // store session data
        });
        this._burger_o=this.db.menusFound$.subscribe(x=>{
            this.myitem["menu"]||="";
            this.myitem["menu"] = x[0];
            this.storage.set('macommande', this.myitem); // store session data
        });
        this._accomp_o= this.db.accompagnement$.subscribe(x=>{

            this.myitem["accomp"] = x[0];
            this.storage.set('macommande', this.myitem); // store session data
        });
         this._promo_o=this.db.promotion$.subscribe(x=>{

            this.myitem["promo"] = x[0];
            this.storage.set('macommande', this.myitem); // store session data
        });
             this._promodessert_o= this.db.promotiondessert$.subscribe(x=>{
            this.myitem["promodessert"] = x[0];
            this.storage.set('macommande', this.myitem); // store session data
        });
      }
      
      });
                  
}
 
    connecterutilisateur(email){
        this.storage.set('user',email);
        this.storage.set('loggedin',true);
        this.loggedIn.next(true);
    }
    myitem={};
    get isLoggedIn() {
        return this.loggedIn.asObservable();
    }
    get hasOrdered() {
        return this.ordered.asObservable();
    }    
    
    get getOrdered() {
        return this.storage.get("ordered") ? true : false;
    }
    getOrder() {
        return this.storage.get("macommande") ? true : false;
    }
    setOrder(order) {
        console.log("content order:")
        console.log(order);
        console.log("ORDER OBJhere");
                    console.log(order);

        try{
             console.log("await my order");
        let myorder=this.local('macommande');
        console.log("ko")
        
        console.log("apercu copmmande", myorder);
        if (!myorder) {
            this.storage.set('macommande',[]);
            let myorder=this.local('macommande');
        }
        
                    this.storage.set('macommande',myorder); // store session data
            this.storage.set('ordered',true);
              order["myid1"]||= "";
                order["boisson1"]||= "";
                 order["boisson2"]||= "";
                 order["accomp"]||= "";
                 order["sauce"]||= "[]";
                 order["promo"]||= "";
                 order["promodessert"]||= "";
                 order["extrasauce"]||= "[]";
                 order["promopdt"]||= "";
                 order["viandesup"]||= "false";
                 order["extrachicken"]||= "false";
                 this.myitem=order;
                            var yy;
                            /*try{
            yy=await this.db.listextrasaucesFilled(JSON.parse(order.extrasauce));
                            }catch(e){console.log(e.stack)};
            console.log(this.myitem);
            try{
           yy=await this.db.listsaucesFilled(JSON.parse(order.extrasauce));
                                        }catch(e){console.log(e.stack)};
try{
            yy=await this.db.getboisson1(JSON.parse(order.boisson1));
             console.log(yy);
                                         }catch(e){console.log(e.stack)};
try{
          yy=await this.db.getboisson2(JSON.parse(order.boisson2));
           console.log(yy.source.__value);
                                       }catch(e){console.log(e.stack)};

            console.log(this.myitem);
            try{
            yy=await this.db.getMenusById(JSON.parse(order.myid1));
                                        }catch(e){console.log(e.stack)};
try{
            yy=await this.db.getpromotion(JSON.parse(order.promo));
                                        }catch(e){console.log(e.stack)};
try{
            yy=await this.db.getpromotiondessert(JSON.parse(order.promodessert));
                                        }catch(e){console.log(e.stack)};*/

         console.log("my order sql AVANT database query", order,this.myitem);
         this.db.myhash(this.myitem);
         //this.db.myhash(order);
         console.log("my order sql database query", order,this.myitem);
        }catch(e){
        console.log(e,"erreur ici", e.stack)
        }

         console.log("fin my order")
    }
    public setLogged(user) {
        if (!!user) {
            this.storage.set('storage_xxx',user); // store session data
            this.loggedIn.next(true);
        }
    }
    emptybasket() {
        this.ordered.next(false);
        this.myorder.next([]);
    }
    logout() {
        this.loggedIn.next(false);
    }
}
