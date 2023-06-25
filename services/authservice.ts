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
}
  getServiceState() {
    return this.isServiceReady.asObservable();
  }

async ngOnInit(){
            this.ordered.next(await this.storage.get("ordered"))
        this.isServiceReady.next(true);
        this.db.macommande$.subscribe(myorder=>{
                 //myorder.push(order);
       
        
                this.ordered.next(true);
        this.myorder.next(myorder);

        });
        this.db.mylistsauceFilled$.subscribe(x=>{
            this.orders[-1]["sauce"] = x;
            this.storage.set('macommande',this.orders);
        });
        this.db.mylistextrasauceFilled$.subscribe(x=>{
            this.orders[-1]["extrasauce"] = x;
            this.storage.set('macommande',this.orders); // store session data

        });
}
 
    connecterutilisateur(email){
        this.storage.set('user',email);
        this.storage.set('loggedin',true);
        this.loggedIn.next(true);
    }
    get isLoggedIn() {
        return this.loggedIn.asObservable();
    }
    get hasOrdered() {
        return this.ordered.asObservable();
    }    
    
    get getOrdered() {
        return this.storage.get("ordered") ? true : false;
    }
    async getOrder() {
        return await this.storage.get("macommande") ? true : false;
    }
    async setOrder(order) {
        console.log("content order:", order)
        try{
         const func=async(order) =>{
             console.log("await my order");
        let myorder=await this.local('macommande');
        console.log("ko")
        try{
        console.log("apercu copmmande", myorder)
        if (!myorder) {
            myorder=[];
        }
        myorder.push(order);
        this.orders=myorder;
                    this.storage.set('macommande',myorder); // store session data
            this.storage.set('ordered',true);
            this.db.listextrasaucesFilled(JSON.parse(order.extrasauce));
            this.db.listsaucesFilled(JSON.parse(order.extrasauce))
         //this.db.mynextcommande(myorder, order);
        
        
        }catch(e){
            console.log(e,"my rror")
        }
         }
         var x = await func(order);
        }catch(e){
        console.log(e)
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
