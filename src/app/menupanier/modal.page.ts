import { Component, OnInit,OnDestroy,ElementRef,ViewChild } from '@angular/core';  
import { ActivatedRoute, Router} from '@angular/router';
import { BaseDatosLocalProvider } from './../../../services/base-donnees-locale';
import { BehaviorSubject, Observable } from 'rxjs';
import { of, map,Subscription } from 'rxjs';
import { Item } from '../../../services/item';
import { Bicycle } from '../services/bicycle';
import { Flavor } from '../../../services/flavor';
import { Menuitem } from '../services/menuitem';
import { MenucommandePage } from '../menucommande/menucommande.page';
import { Basketv2Page } from '../basketv2/basketv2.page';
import { IonModal,IonItem,IonCard } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { AnimationController,ModalController } from '@ionic/angular';


import { MenuController } from '@ionic/angular';

import { NavController } from '@ionic/angular';




@Component({  
  selector: 'app-modal-menu',  
  templateUrl: './modal.page.html',  
  styleUrls: ['./modal.scss'],  
})  
export class PanierPage implements OnInit,OnDestroy {  
  
  constructor(private navCtrl: NavController, private mypage: MenucommandePage, private modalCtrl: ModalController, private db: BaseDatosLocalProvider,private route : ActivatedRoute, private router : Router) {}  
  
  foo;
  bar;
  myid;
myv;          
items$: Observable<Menuitem[]> = of([]);

private _burgersobservable: Subscription;
private _dbobservable: Subscription;
private _nbobservable: Subscription;
private _routeobservable: Subscription;
private _catobservable: Subscription;
private currentNumber = {};
private currentItem = {};

increment ($evt,myid,limit = 0) {
   //alert(myid)
   //alert(this.currentNumber[Number(myid)])
   var x = Object.values(this.currentNumber).map(x=>Number(x));
  if (limit > 0 && x.length > 0  && x.reduce((a, b)=> a + b,0) === limit) {
    alert("la limite est de "+String(limit) + ' items')
  } else {
  this.currentNumber[Number(myid)]++;
  }
}

decrement ($evt,myid,limit = 0) {
   var x = Object.values(this.currentNumber).map(x=>Number(x));
  if (limit > 0 && x.length > 0  && this.currentNumber[Number(myid)] !== 0) {
  this.currentNumber[Number(myid)]--;
  }
  
}
manyitems;

@ViewChild(IonItem) item: IonItem;
@ViewChild(IonModal) modal: IonModal;
@ViewChild(IonCard) card: IonCard;
ngOnDestroy(){
  
       
    
    
}
  ngOnInit() {
 
  }
alleraupanier($evt) {
    //alert('ondestroy modal ');
    console.log("MY    DATA        :         ");
    //this.mypage.alleraupanier1($evt);
    document.getElementById("ajoutpanier").click();
}
  dismiss() {  

    this.modalCtrl.dismiss();  
  }  
}  
