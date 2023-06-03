import {  ViewChild } from '@angular/core';
import { IonAccordionGroup } from '@ionic/angular';
import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, Router,ParamMap} from '@angular/router';
import { BaseDatosLocalProvider } from './../../../services/base-donnees-locale';
import { EmailValidator } from '../validators/email.validator';
import { BehaviorSubject, Observable } from 'rxjs';
import { of, map,Subscription,takeUntil } from 'rxjs';
import { NavController, NavParams } from '@ionic/angular';
import { Menuitem } from './../services/menuitem';
import { User } from './../services/user';
import { Menu } from './../services/menu';
//import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import {AuthService} from '../../../services/authservice';
import { FormGroup, FormBuilder, Validators,FormControl } from "@angular/forms";
import { ModallocalisationPage } from '../modallocalisation/modallocalisation.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-basketv2',
  templateUrl: './basketv2.page.html',
  styleUrls: ['./basketv2.page.scss'],
})
export class Basketv2Page implements OnInit {
  @ViewChild('accordionGroup', { static: true }) accordionGroup: IonAccordionGroup;
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
menu: any;
boissons: any;
boisson1: any;
boisson2: any;
sauce: any;
accompagnement: any;
promotion: any;
promotiondessert: any;
extrasauce: any;
promotionpdt: any;
prixitems:any;
listsauce:any;
listextrasauce:any;
private _userobservable: Subscription;
private _dbobservable: Subscription;
myaddress:any;
users$: Observable<User[]> = of([]);
public data: any;
sommedesprix:object = {};
viandesupplementaire:number=0;
extramcchicken:number=0;
isLoggedin$:Observable<Boolean>=of(false);
    article:any;
    isLoggedin=this.authService.isLoggedIn;
    userObject:any;
    //private nativeStorage: NativeStorage
  constructor(private modalCtrl: ModalController, private db:BaseDatosLocalProvider, private formBuilder:FormBuilder, private storage: Storage,
    private authService: AuthService,private myrouter:Router,public plt: Platform,private route : ActivatedRoute) { 
        
                              
  }
  ionViewDidEnter(){
   this.isLoggedin=this.authService.isLoggedIn;
   console.log("is logged in : ",this.isLoggedin)
  }
  ionicForm=this.formBuilder.group({email:[null, Validators.required],myemail:[null,EmailValidator.validEmail],mdp: [null,Validators.required]});
  form;
connexion(){
    this.submitted=true;
//this.ionicForm.submit();
this.form=this.ionicForm.value;
this.db.getallusers(this.form.email,this.form.mdp);
}
submitted=false;
createForm(){
    
       this.ionicForm=this.formBuilder.group({email:[null, Validators.required],myemail:[null,EmailValidator.validEmail],mdp: [null,Validators.required]});

}
editmodel(){
//        var mdp=document.querySelector<HTMLInputElement>("#mdp")!.value;
//   var email=document.querySelector<HTMLInputElement>("#email")!.value;
//    
//    this.ionicForm.setValue({email: email,mdp:mdp});
//    console.log(this.ionicForm.value, "myform");
}
forgetpassword(){
    this.myrouter.navigate(["/login/forgotpassword"]);
}
 async openSansMembreModal(){
        const modal = await this.modalCtrl.create({
      component: ModallocalisationPage,
    });
    
    modal.onDidDismiss()
    .then((data)=>{
        const address=data['data'];
        console.log("MY ADDRESS:",address)
        this.myaddress=address;
        this.myvalidemail=true;
    })
    return await modal.present();



}
continuersansmembre(){
this.openSansMembreModal();
}
sinscrire(){
    this.myrouter.navigate(["/register"]);
}
myvalidemail=false;
loggedin=false;
ordered=false;
  ngOnInit() {
      console.log("on init bazsket v2")
      try {
                  this._dbobservable = this.authService.getServiceState().subscribe((res) => {
      if(res){
      console.log(res);
        this.authService.loggedIn$.subscribe(x=>{
            this.loggedin = x;
            });
        this.authService.ordered$.subscribe(x=>{
            console.log("a commandé ? ", x)
            this.ordered = x;
            console.log("a commandé ? ", x,this.ordered,!this.ordered,typeof x === "undefined" )
               if (typeof x === "undefined" || !this.ordered) {
                   console.log("pas de commande");
            this.myrouter.navigate(["/produitv2"])
        }
            });
        
        console.log("is looged in",this.ordered,this.loggedin)

       this.createForm();
             this._userobservable = this.db.users$.subscribe(item => {
                 console.log(item)
                 console.log("users:")
           this.users$ = of(item);
           if(item && item[0]) {
               this.myvalidemail=true;
                
           }
       });
      console.log("MON PANIER");
          this.plt.ready().then((readySource) => {
                    console.log('Platform ready from', readySource);
          });
      }
                  });
            } catch(e){
                console.log(e);
}

}
}



                  //this.nativeStorage.getItem("macommande").then(params=>{
//this.boissons=params["boissons"];
//this.boisson1=params["boisson1"];
//this.boisson2=params["boisson1"];
//this.sauce=params["sauce"];
//this.accompagnement=params["accompagnement"];
//this.promotion=params["promotion"];
//this.promotiondessert=params["promotiondessert"];
//this.extrasauce=params["extrasauce"];
//this.promotionpdt=params["promotionpdt"];
//this.prixitems=params["prixitems"];
//this.listsauce=params["listsauce"];
//this.listextrasauce=params["listextrasauce"];
//        });

//      this.userObject = this.navParams.data;
//      let myparams=this.router.getCurrentNavigation().extras.state;
//      console.log(myparams);
//      console.log(this.navParams.get("myid1"));
//   this.data=this.navParams.get('data')|| {};
//   //alert(JSON.stringify(this.userObject));
//   this.data[this.navParams.get('id')]= this.data[this.navParams.get('id')]||{};
//   this.data[this.navParams.get('id')].boisson1 = this.navParams.get('boisson1');
//              this.data[this.navParams.get('id')].boisson2 = this.navParams.get('boisson2');
//                    this.data[this.navParams.get('id')].promopdt = this.navParams.get('promopdt');
//      this.data[this.navParams.get('id')].promo = this.navParams.get('promo');
//      this.data[this.navParams.get('id')].extrachicken = this.navParams.get('extrachicken');
//      this.data[this.navParams.get('id')].viandesup = this.navParams.get('viandesup');
//      this.data[this.navParams.get('id')].promodessert = this.navParams.get('promodessert');
//      this.data[this.navParams.get('id')].sauce = this.navParams.get('sauce');
//      this.data[this.navParams.get('id')].extrasauce = this.navParams.get('extrasauce');
//      this.data[this.navParams.get('id')].accomp = this.navParams.get('accomp');
////      this.article=this.data[this.navParams.get('id')];
//      this._menuobservable = this.db.menuFound$.subscribe(item => {
//           this.menu$ = of(item);
//           this.menuprix = item.prix;
//           this.menuid = item.id;
//           console.log(this.menuprix, "menu prix")
//           
//       });
//       this._boissonobservable = this.db.boissons$.subscribe(item => {
//           console.log('MON PANIER');
//           this.boissons$ = of(item);
//       });
//this._extrasauceobservable = this.db.extrasauce$.subscribe(item => {
//    console.log('MON PANIER');
//           this.extrasauce$ = of(item);
//       });
//this._sauceobservable = this.db.sauce$.subscribe(item => {
//    console.log('MON PANIER');
//           this.sauce$ = of(item);
//       });
//this._accompagnementobservable = this.db.accompagnement$.subscribe(item => {
//    console.log('MON PANIER');
//           this.accompagnement$ = of(item);
//       });
//this._promotionobservable = this.db.promotion$.subscribe(item => {
//    console.log('MON PANIER');
//           this.promotion$ = of(item);
//       });
//this._promotiondessertobservable = this.db.promotiondessert$.subscribe(item => {
//    console.log('MON PANIER');
//           this.promotiondessert$ = of(item);
//       });
//this._promotionpdtobservable = this.db.promotionpdt$.subscribe(item => {
//    console.log('MON PANIER');
//           this.promotionpdt$ = of(item);
//       });
//       this._mylistsauceobservable = this.db.mylistsauceFilled$.subscribe(item => {
//           console.log('MON PANIER');
//           this.listsauce$ = of(item);
//       });
//       this._mylistextrasauceobservable = this.db.mylistextrasauceFilled$.subscribe(item => {
//           console.log('MON PANIER');
//           this.listextrasauce$ = of(item);
//       });       
//       this._prixitemnb = this.db.prixitemsnb$.subscribe(item => {
//           console.log('MON PANIER');
//           console.log("item reptionne",item)
//           this.sommedesprix[item[2]] = item[1];
//           
//       });
//       this.db.getboisson(this.userObject.boisson1);
//       this.boisson1$ = this.boissons$;
//            this.db.getboisson(this.userObject.boisson2);
//       this.boisson2$ = this.boissons$;
//       this.db.getsauce(this.userObject.sauce);
//       this.db.get1promotionpdt(this.userObject.promopdt);
//       this.db.getpromotion(this.userObject.promo);
//       this.db.getpromotiondessert(this.userObject.promodessert);
//       //pb 
//       console.log("myitem",this.userObject)
//       this.db.listsauces(this.userObject.sauce);
//       this.db.listextrasauces(this.userObject.extrasauce);
//       this.db.getaccompagnement(this.userObject.accomp);
//       this.db.getmenu(this.userObject.id);
//       this.extramcchicken=this.userObject.extrachicken;
//       this.viandesupplementaire=this.userObject.viandesup;

