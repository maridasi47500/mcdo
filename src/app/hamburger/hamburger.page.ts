import { Component,ElementRef,ViewChild } from '@angular/core';
import { OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { BaseDatosLocalProvider } from './../../../services/base-donnees-locale';
import { BehaviorSubject, Observable } from 'rxjs';
import { of, map,Subscription } from 'rxjs';
import { Item } from '../../../services/item';
import { Bicycle } from '../services/bicycle';
import { Flavor } from '../../../services/flavor';

import { IonModal,IonItem } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { AnimationController,ModalController } from '@ionic/angular';
import { ModalPage } from '../hamburger/modal.hamburger.page';  

import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.page.html',
  styleUrls: ['./hamburger.page.scss'],
})
export class HamburgerPage implements OnInit,OnDestroy {
          
burgers$: Observable<Item[]> = of([]);
id1:string;
mystr:string;
hamburgers: object = [];
 
ngOnDestroy(){
    this._dbobservable.unsubscribe();      
    //  this._burgersobservable.unsubscribe();
    this._routeobservable.unsubscribe();
}
sample: object = [];
  cat: any;
      mission: string;
private _burgersobservable: Subscription;
private _dbobservable: Subscription;
private _routeobservable: Subscription;
private _catobservable: Subscription;
constructor(private modalCtrl: ModalController, private db: BaseDatosLocalProvider,private route : ActivatedRoute, private router : Router){
      /*  db.missionAnnounced$.subscribe(
          mission => {
            this.mission = mission;
          });*/
       
       
 
          
    }
  announce() {
        this.db.announceMission('some mission name');
        alert(this.mission);
      }
   
  ngOnInit() {
      this.db.observable.subscribe(x=>{
          this.mystr = x;
      });
          this._catobservable =this.db.catFound$.subscribe(x=>{
          this.cat = x;
      });
      this._burgersobservable = this.db.itemListFilled$.subscribe(item => {
           
           this.burgers$ = of(item);
   

           this.mystr = typeof this.burgers$;
           this.hamburgers = item;
       });
       
      //this.db.getProgress();
      
      this._dbobservable = this.db.getDatabaseState().subscribe((res) => {
      if(res){
      this._routeobservable = this.route.paramMap.subscribe(params => {
        
      let id1 = params.get('flavor');
      
      this.id1 = id1;
     
      //alert(id1);
            
        //alert("connecte db")



  this.db.getItemsByCatUrl(id1);
 this.db.getCatByUrl(id1);
      // alert("okokok"+JSON.stringify(this.burgers$));
      
     
     
      })
            
     
            
   
   };
      })
  
   
//this.announce();
  }
  
async showModal() {  
    const modal = await this.modalCtrl.create({  
      component: ModalPage  
    });  
    return await modal.present();  
  }  
@ViewChild(IonModal) modal: IonModal;
@ViewChild(IonItem) item: IonItem;
  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }




}

function MyModal(MyModal: any) {
    throw new Error('Function not implemented.');
}
