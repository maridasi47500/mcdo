import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { BaseDatosLocalProvider } from './../../../services/base-donnees-locale';
import { BehaviorSubject, Observable } from 'rxjs';
import { of, map,Subscription,takeUntil } from 'rxjs';
import { NavController, NavParams } from '@ionic/angular';
import { Menuitem } from './../services/menuitem';
import { Menu } from './../services/menu';
@Component({
  selector: 'app-basketv2',
  templateUrl: './basketv2.page.html',
  styleUrls: ['./basketv2.page.scss'],
})
export class Basketv2Page implements OnInit {

private myid;
private menuprix:any;
private menuid:any;
menu$: Observable<Menu> = of();
boissons$: Observable<Menuitem[]> = of([]);
boisson1$: Observable<Menuitem[]> = of([]);
boisson2$: Observable<Menuitem[]> = of([]);
sauce$: Observable<Menuitem[]> = of([]);
accompagnement$: Observable<Menuitem[]> = of([]);
promotion$: Observable<Menuitem[]> = of([]);
promotiondessert$: Observable<Menuitem[]> = of([]);
extrasauce$: Observable<Menuitem[]> = of([]);
promotionpdt$: Observable<Menuitem[]> = of([]);
prixitems$:Number= 0;
listsauce$:any;
listextrasauce$:any;
private _menuobservable: Subscription;
private _dbobservable: Subscription;
private _restoobservable: Subscription;
private _servicedeforfaitobservable: Subscription;
private _routeobservable: Subscription;
private _boissonobservable: Subscription;
private _extrasauceobservable: Subscription;
private _mylistextrasauceobservable: Subscription;
private _mylistsauceobservable: Subscription;
private _sauceobservable: Subscription;
private _accompagnementobservable: Subscription;
private _promotionobservable: Subscription;
private _promotiondessertobservable: Subscription;
private _promotionpdtobservable: Subscription;
private _prixitemnb: Subscription;
public data: any;
sommedesprix:object = {};
viandesupplementaire:number=0;
extramcchicken:number=0;
    article:any;
    userObject:any;
  constructor(private db: BaseDatosLocalProvider,private route : ActivatedRoute,public navCtrl: NavController, public navParams: NavParams) { 
        
                              
  }

  ngOnInit() {
      this.userObject = this.navParams.data;
   this.data=this.navParams.get('data')|| {};
   //alert(JSON.stringify(this.userObject));
   this.data[this.navParams.get('id')]= this.data[this.navParams.get('id')]||{};
   this.data[this.navParams.get('id')].boisson1 = this.navParams.get('boisson1');
              this.data[this.navParams.get('id')].boisson2 = this.navParams.get('boisson2');
                    this.data[this.navParams.get('id')].promopdt = this.navParams.get('promopdt');
      this.data[this.navParams.get('id')].promo = this.navParams.get('promo');
      this.data[this.navParams.get('id')].extrachicken = this.navParams.get('extrachicken');
      this.data[this.navParams.get('id')].viandesup = this.navParams.get('viandesup');
      this.data[this.navParams.get('id')].promodessert = this.navParams.get('promodessert');
      this.data[this.navParams.get('id')].sauce = this.navParams.get('sauce');
      this.data[this.navParams.get('id')].extrasauce = this.navParams.get('extrasauce');
      this.data[this.navParams.get('id')].accomp = this.navParams.get('accomp');
      this.article=this.data[this.navParams.get('id')];
      this._menuobservable = this.db.menuFound$.subscribe(item => {
           this.menu$ = of(item);
           this.menuprix = item.prix;
           this.menuid = item.id;
           console.log(this.menuprix, "menu prix")
           
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
       this._mylistsauceobservable = this.db.mylistsauceFilled$.subscribe(item => {
           this.listsauce$ = of(item);
       });
       this._mylistextrasauceobservable = this.db.mylistextrasauceFilled$.subscribe(item => {
           this.listextrasauce$ = of(item);
       });       
       this._prixitemnb = this.db.prixitemsnb$.subscribe(item => {
           console.log("item reptionne",item)
           this.sommedesprix[item[2]] = item[1];
           
       });
       this.db.getboisson(this.userObject.boisson1);
       this.boisson1$ = this.boissons$;
            this.db.getboisson(this.userObject.boisson2);
       this.boisson2$ = this.boissons$;
       this.db.getsauce(this.userObject.sauce);
       this.db.get1promotionpdt(this.userObject.promopdt);
       this.db.getpromotion(this.userObject.promo);
       this.db.getpromotiondessert(this.userObject.promodessert);
       //pb 
       console.log("myitem",this.userObject)
       this.db.listsauces(this.userObject.sauce);
       this.db.listextrasauces(this.userObject.extrasauce);
       this.db.getaccompagnement(this.userObject.accomp);
       this.db.getmenu(this.userObject.id);
       this.extramcchicken=this.userObject.extrachicken;
       this.viandesupplementaire=this.userObject.viandesup;
  }

}
