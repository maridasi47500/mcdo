import { Component, OnInit } from '@angular/core';
import { BaseDatosLocalProvider } from './../../../services/base-donnees-locale';
import { BehaviorSubject, Observable } from 'rxjs';
import { of, map,Subscription } from 'rxjs';
import { Item } from '../../../services/item';
import { Menucat } from './../services/menucat';
import { Menu } from './../services/menu';
import { Menuitem } from './../services/menuitem';
import { ActivatedRoute, Router} from '@angular/router';
import { ElementRef,ViewChild } from '@angular/core';
import { IonModal,IonItem } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { AnimationController,ModalController } from '@ionic/angular';
import { ModalPage } from '../menumodal/modal.page';

@Component({
  selector: 'app-menucommande',
  templateUrl: './menucommande.page.html',
  styleUrls: ['./menucommande.page.scss'],
})
export class MenucommandePage implements OnInit {
   cat: any;  
   myid;
menu$: Observable<Menu> = of(new Menu);
id1:any;
boissons$: Observable<Menuitem[]> = of([]);
sauce$: Observable<Menuitem[]> = of([]);
accompagnement$: Observable<Menuitem[]> = of([]);
promotion$: Observable<Menuitem[]> = of([]);
promotiondessert$: Observable<Menuitem[]> = of([]);
extrasauce$: Observable<Menuitem[]> = of([]);
promotionpdt$: Observable<Menuitem[]> = of([]);
private _menuobservable: Subscription;
private _dbobservable: Subscription;
private _restoobservable: Subscription;
private _servicedeforfaitobservable: Subscription;
private _routeobservable: Subscription;
private _boissonobservable: Subscription;
private _extrasauceobservable: Subscription;
private _sauceobservable: Subscription;
private _accompagnementobservable: Subscription;
private _promotionobservable: Subscription;
private _promotiondessertobservable: Subscription;
private _promotionpdtobservable: Subscription;
viandesupplementaire:number=0;
extramcchicken:number=0;
sommetotale:number = this.viandesupplementaire + this.extramcchicken;

addviande($evt) {
}

addextrachicken($evt) {
}
  constructor(private db: BaseDatosLocalProvider,private route : ActivatedRoute,private modalController: ModalController) { }
classname;
centermodal: boolean = false;
   ngOnInit() {
  
      this._menuobservable = this.db.menuFound$.subscribe(item => {
           this.menu$ = of(item);
       });
       this._boissonobservable = this.db.boissons$.subscribe(item => {
           this.boissons$ = of(item);
       });
this._extrasauceobservable = this.db.extrasauce$.subscribe(item => {
           this.extrasauce$ = of(item);
       });
this._sauceobservable = this.db.sauce$.subscribe(item => {
           this.sauce$ = of(item);
       });
this._accompagnementobservable = this.db.accompagnement$.subscribe(item => {
           this.accompagnement$ = of(item);
       });
this._promotionobservable = this.db.promotion$.subscribe(item => {
           this.promotion$ = of(item);
       });
this._promotiondessertobservable = this.db.promotiondessert$.subscribe(item => {
           this.promotiondessert$ = of(item);
       });
this._promotionpdtobservable = this.db.promotionpdt$.subscribe(item => {
           this.promotionpdt$ = of(item);
       });
      this._dbobservable = this.db.getDatabaseState().subscribe((res) => {
      if(res){
      this._routeobservable = this.route.paramMap.subscribe(params => {
        
      let id1 = params.get('pid');
      
      this.id1 = id1;
     

     this.db.findMenuById(this.id1);
          this.db.getpromotionpdt();
          this.db.getaccompagnements();
          this.db.getboissons()
          this.db.getextrasauces();
          this.db.getpromotiondesserts();
          this.db.getpromotions();
          this.db.getpromotionpdt();
          this.db.getsauces();


      })
            
     
            
   
   };
      })

  }
  myselect($evt) {
    $evt.stopPropagation();
    $evt.preventDefault();
        
      this.classname = $evt.target.dataset.myclass;
      this.myid=$evt.target.id;
      this.centermodal = $evt.target.dataset.centermodal === "centermodal";
      //var btn = (document.getElementsByClassName("mybtn")[0] as HTMLElement);
      this.presentModal();
         const x:HTMLElement = (document.getElementsByClassName(this.classname) as HTMLCollectionOf<HTMLElement>)[0];
       
          //if (!this.centermodal) {
          //x.style.height = $evt.target.style.height+$evt.target.style.top;
          // x.style.left = $evt.target.style.left;
          //}
          return false;
  }
  @ViewChild(IonModal) modal: IonModal;

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
   async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: { 
        foo: this.classname,
        bar: this.centermodal,
        myid: this.myid
      }
    });

    return await modal.present();
  }
}
