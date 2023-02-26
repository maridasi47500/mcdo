import { Component, OnInit,OnDestroy } from '@angular/core';
import { BaseDatosLocalProvider } from './../../../services/base-donnees-locale';
import { BehaviorSubject, Observable } from 'rxjs';
import { of, map,Subscription } from 'rxjs';
import { Item } from '../../../services/item';
import { Menucat } from './../services/menucat';
import { Menu } from './../services/menu';
import { Menuitem } from './../services/menuitem';
import { ActivatedRoute, Router, NavigationExtras} from '@angular/router';
import { ActivationStart } from '@angular/router';
import { ElementRef,ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { IonModal,IonItem } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { AnimationController,ModalController } from '@ionic/angular';
import { ModalPage } from '../menumodal/modal.page';
import { PanierPage } from '../menupanier/modal.page';
import { Order } from '../services/order';
import { FormGroup, FormBuilder, Validators,FormControl } from "@angular/forms";
import { NativeStorage } from '@ionic-native/native-storage/ngx';
@Component({
  selector: 'app-menucommande',
  templateUrl: './menucommande.page.html',
  styleUrls: ['./menucommande.page.scss'],
})
export class MenucommandePage implements OnInit,OnDestroy {
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
prixitems$:Number= 0;
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
private _prixitemnb: Subscription;

sommedesprix:object = {};
viandesupplementaire:number=0;
extramcchicken:number=0;
prixtotalitems:number=0;
menuprix:number;
menuid:number=0;
sommetotale:number = this.mysum();
ii:number = 0;

 ionicForm:FormGroup;
myfieldsform={ 
       myid1: "",
       boisson1: "",
       boisson2:"",
       accomp:"",
       sauce:"",
       promo:"",promodessert:"",
       extrasauce:"",
       promopdt:"",
       viandesup:"",
       extrachicken:"",

} 
private selects = document.getElementsByTagName("select");
mysum() {
    delete this.sommedesprix["undefined"];
    
    const initialValue = 0;
const sumWithInitial = Object.values(this.sommedesprix).reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
    return this.menuprix + this.viandesupplementaire + this.extramcchicken + sumWithInitial; 
}
editmysum() {
    this.sommetotale = this.mysum();
}
myfunc(){
}
addviande($evt) {
    
    if ($evt.target.checked == true) {
        this.viandesupplementaire = 50
    } else {
        this.viandesupplementaire = 0
    }
    this.editmysum()
}
get myid1(): string {
		return this.ionicForm.value['myid1'];
	}
  ngOnDestroy (){
      console.log("destroy de la page menu commande")
      this._menuobservable.unsubscribe();
this._dbobservable.unsubscribe();

this._routeobservable.unsubscribe();
this._boissonobservable.unsubscribe();
this._extrasauceobservable.unsubscribe();
this._sauceobservable.unsubscribe();
this._accompagnementobservable.unsubscribe();
this._promotionobservable.unsubscribe();
this._promotiondessertobservable.unsubscribe();
this._promotionpdtobservable.unsubscribe();
this._prixitemnb.unsubscribe();
console.log('hgrt kdghl');
          if (this.modal) {
      //this.modal.ngOnDestroy();
    }
              if (this.othermodal) {
      //this.othermodal.ngOnDestroy();
    }
  }
async alleraupanier1($evt) {
    //alert('ondestroy modal ');
    console.log("aller à panier");
    var myinput;
    var selects= Object.keys(this.myfieldsform);
    console.log(selects);
    var myorder={};
    for (var i = 0;i<selects.length;i++) {
        myinput=document.querySelector<HTMLInputElement>("#"+selects[i])!;
        console.log(selects[i], myinput.value);
        if (myinput.type && myinput.type === "checkbox") {
            myorder[selects[i]]=myinput.checked;
        } else {
        myorder[selects[i]]=myinput.value;
        }
        
    }
    var order=new Order();
    this.ionicForm.setValue(myorder);
    console.log(this.ionicForm.value, "myform");

//    this.myrouter.navigate(["panierv2"], navigationExtras);
this.cancelPanier();

    this.ngOnDestroy();
   const navigationExtras = {
      queryParams: this.ionicForm.value, relativeTo: this.route
      
    };
    //this.myrouter.navigate(['/panierv2'],navigationExtras);
    //this.navCtrl.push()
    console.log("navigate");
    if (this.nativeStorage.getItem('macommande')) {
        var items=await this.nativeStorage.getItem('macommande');
        if (items.length) {
        items=items.filter(x=>x.myid1 !== this.ionicForm.value.myid1);

        }else{
            items=[];
        }
        items.push(this.ionicForm.value);
        this.nativeStorage.setItem('macommande',items)
    } else {
    }
    this.myrouter.navigate(["/panierv2"]);
    console.log("ok navigate");
    //document.getElementById('basketv2').click();
}

addextrachicken($evt) {
        if ($evt.target.checked == true) {
        this.extramcchicken = 25
    } else {
        this.extramcchicken = 0
    }
    this.editmysum()
}

  constructor(private nativeStorage: NativeStorage,private navCtrl: NavController,private location: Location,public formBuilder: FormBuilder,public db: BaseDatosLocalProvider, private myrouter:Router,private route : ActivatedRoute,private modalController: ModalController,private othermodalController: ModalController) {
     

       }
       public router = this.route; 
classname;


centermodal: boolean = false;
    createForm() {
        //alert("ok")
       this.ionicForm=this.formBuilder.group({myid1: [null],boisson1: [null],boisson2:[null],accomp:[null],sauce:[null],promo:[null],promodessert:[null],extrasauce:[null],promopdt:[null],viandesup:[null],extrachicken:[null]});
       console.log(this.ionicForm.value,"valueee");
       //alert("ok")
    }
   ngOnInit() {
       console.log('on init menu commande');
    this.createForm();
      this._menuobservable = this.db.menuFound$.subscribe(item => {
           this.menu$ = of(item);
           this.menuprix = item.prix;
           this.menuid = item.id;
           console.log(this.menuprix, "menu prix")
           this.editmysum();
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
       this._prixitemnb = this.db.prixitemsnb$.subscribe(item => {
           console.log("item reptionne",item)
           this.sommedesprix[item[2]] = item[1];
           console.log("prixde tous les champs",this.sommedesprix)
           this.editmysum();
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
  selectfieldchanged($evt) {
       
      
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
  ajouteaupanier($evt){
   $evt.stopPropagation();
    $evt.preventDefault();
        
      this.classname = $evt.target.dataset.myclass;
      this.myid=$evt.target.id;
      this.centermodal = $evt.target.dataset.centermodal === "centermodal";
      //var btn = (document.getElementsByClassName("mybtn")[0] as HTMLElement);
      this.ajouteAuPanierModal();   
  }
  @ViewChild(IonModal) modal: IonModal;
  @ViewChild(IonModal) othermodal: IonModal;
  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }
  cancelPanier() {
    this.othermodalController.dismiss(null, 'cancel');
  }
  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
      console.log("dismisse")
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
     async ajouteAuPanierModal() {
    const modal = await this.othermodalController.create({
      component: PanierPage,
      componentProps: { 
        foo: this.classname,
        bar: this.centermodal,
        myid: this.myid
      }
    });

    return await modal.present();
  }
}
