import {Injectable} from '@angular/core';
import {BehaviorSubject,take} from 'rxjs';
import { Storage } from '@ionic/storage-angular';

import { Component, OnInit,OnDestroy } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService implements OnInit {
  private isServiceReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

    private loggedIn = new BehaviorSubject<boolean>(false);
    private ordered = new BehaviorSubject<boolean>(false);
    private myorder = new BehaviorSubject<object>([]);
        loggedIn$ = this.loggedIn.asObservable();
        ordered$ = this.ordered.asObservable();
        myorder$ = this.myorder.asObservable();
    constructor(private storage: Storage) {
        this.isServiceReady.next(true);
        }
    async local(key, value?:any) {
    if(value === undefined) {
        return await this.storage.get(key);
    }

    return this.storage.set(key, value);
}
  getServiceState() {
    return this.isServiceReady.asObservable();
  }

async ngOnInit(){
            this.ordered.next(await this.storage.get("ordered"))
        this.isServiceReady.next(true);
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
        if (myorder && myorder!=[]) {
            this.storage.set('macommande',myorder); // store session data
            this.storage.set('ordered',true);
        }        
        }catch(e){
            console.log(e,"my rror")
        }
        this.ordered.next(true);
        this.myorder.next(myorder);
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
