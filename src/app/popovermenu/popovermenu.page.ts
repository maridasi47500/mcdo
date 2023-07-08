import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import {BaseDatosLocalProvider} from '../../../services/base-donnees-locale';

import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Flavor } from '../../../services/flavor';
import { Item } from '../../../services/item';
import { Cat } from '../../../services/cat';
import { Menucat } from '../../app/services/menucat';
import { Menu } from '../../app/services/menu';
import { Order } from '../../app/services/order';
import { Menuitem } from '../../app/services/menuitem';
import { User } from '../../app/services/user';
import { map,Subscription } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Storage } from '@ionic/storage-angular';
import {AuthService} from "../../../services/authservice";
@Component({
  selector: 'app-popovermenu',
  templateUrl: './popovermenu.page.html',
  styleUrls: ['./popovermenu.page.scss'],
})
export class PopovermenuPage implements OnInit {

  constructor(private db:BaseDatosLocalProvider) { }
private _mycommande: Subscription;
private _extrachicken_o: Subscription;
private _dbobservable: Subscription;
listitems;
ngOnDestroy (){
      console.log("destroy service POPOVER");
 
this._mycommande.unsubscribe();
this._extrachicken_o.unsubscribe();
this._dbobservable.unsubscribe();
}
  ngOnInit() {
      this._dbobservable = this.db.getDatabaseState().subscribe((res) => {
      if(res){

        this._mycommande=this.db.macommandestorage$.subscribe(x=>{
            this.listitems=x;
        });
      }
      });
  }

}
