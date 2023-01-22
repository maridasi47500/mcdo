import { Component, OnInit,OnDestroy,ElementRef,ViewChild } from '@angular/core';  
import { ActivatedRoute, Router} from '@angular/router';
import { BaseDatosLocalProvider } from './../../../services/base-donnees-locale';
import { BehaviorSubject, Observable } from 'rxjs';
import { of, map,Subscription } from 'rxjs';
import { Item } from '../../../services/item';
import { Bicycle } from '../services/bicycle';
import { Flavor } from '../../../services/flavor';
import { Menuitem } from '../services/menuitem';
import { IonModal,IonItem,IonCard } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { AnimationController,ModalController } from '@ionic/angular';


import { MenuController } from '@ionic/angular';






@Component({  
  selector: 'app-modal-menu',  
  templateUrl: './modal.page.html',  
  styleUrls: ['./modal.scss'],  
})  
export class ModalPage implements OnInit,OnDestroy {  
  
  constructor(private modalCtrl: ModalController, private db: BaseDatosLocalProvider,private route : ActivatedRoute, private router : Router) {}  
  
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
    this._dbobservable.unsubscribe();
    this._nbobservable.unsubscribe();

    this._burgersobservable.unsubscribe();
        var str="";
    var val="[";
    var paspremier = false;
  for (const property in this.currentNumber) {
      if (this.currentNumber[property] > 0) {
          if (paspremier) {
              str+=', ';
              val+=",";
          }
    str+=this.currentNumber[property]+" "+this.currentItem[property];
    val+="["+String(property)+",'"+this.currentNumber[property]+"']";
        paspremier = true;
        
      }
}
val+="]";
var y = document.querySelector<HTMLInputElement>("[data-myclass='"+this.foo+"']")!;
y.innerHTML +="<option value=\""+val+"\">"+str+"</option>";
//alert(val);
y.value=val;
}
  ngOnInit() {
      var myval;
      this.myv={};
      //alert(this.foo);
         try {
             let re = /\'/gi;
             var strvalue=document.querySelector<HTMLInputElement>("[data-myclass='"+this.foo+"']")!.value.replace(re,"");
             //alert(strvalue);
          myval = JSON.parse(strvalue)  
          //alert(JSON.stringify(myval));
          //alert(myval)
          //alert(typeof(myval)) 
         } catch(e) {
             //alert(JSON.stringify(e));
             myval=[];
         }
         if (typeof(myval) !== "object") {
             myval=[];
         }
         //alert(JSON.stringify(myval.values));
         for (var y = 0;y < myval.length ; y++) {
             this.myv[myval[y][0]] = myval[y][1];
         }
         //alert(JSON.stringify(this.myv))
    console.log(`${this.foo} ${this.bar}`);
             this._nbobservable = this.db.manyitems$.subscribe(item => {
           console.log(item)
           this.manyitems = of(item);


       });

         this._burgersobservable = this.db.choisirItems$.subscribe(item => {
           console.log(item)
           console.log(item.length)
           for (var i = 0;i<item.length;i++) {
    //alert(this.myv[Number(item[i].id)])
       this.currentNumber[Number(item[i].id)] = this.myv[Number(item[i].id)] || 0;
       this.currentItem[Number(item[i].id)] = item[i].name.substring(0,4)+".";
   }
           this.items$ = of(item);
   

       });
  
     this._dbobservable = this.db.getDatabaseState().subscribe((res) => {
      if(res){
       

                this._routeobservable = this.route.paramMap.subscribe(params => {
            
       this.db.getItemsByTypeName(this.foo);
            this.db.getItemsByTypeName(this.foo);
      })
     
            
   
   };
      })
             this.db.getItemsByTypeName(this.foo);

  }
  choisiritem($evt) {
      if (!(this.foo === 'sauce' || this.foo === 'extra sauce')) {
      var x = document.getElementsByTagName('select'),y=document.getElementById("clickeditem"), myel;
      for (var i = 0;i<x.length;i++) {
          myel = x[i];
          if (myel.id === this.myid) {
              
            console.log(myel)
            console.log($evt.target)
            myel.value = $evt.target.children[0].innerHTML;
             document.getElementById("clickeditem").innerHTML = "";
            this.dismiss();
            continue;
          }
          
      }
      }
  
  }
  dismiss() {  

    this.modalCtrl.dismiss();  
  }  
}  