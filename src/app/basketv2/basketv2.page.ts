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
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import {AuthService} from '../../../services/authservice';
import { FormGroup, FormBuilder, Validators,FormControl } from "@angular/forms";
import { ModallocalisationPage } from '../modallocalisation/modallocalisation.page';
import { ModalController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { PopovermenuPage } from '../popovermenu/popovermenu.page';
@Component({
  selector: 'app-basketv2',
  templateUrl: './basketv2.page.html',
  styleUrls: ['./basketv2.page.scss'],
})
export class Basketv2Page implements OnInit,OnDestroy {
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
    displayname;
    //private nativeStorage: NativeStorage
  constructor(public popoverController: PopoverController, private modalCtrl: ModalController, 
  private db:BaseDatosLocalProvider, private formBuilder:FormBuilder, private storage: Storage,
    private authService: AuthService,private myrouter:Router,public plt: Platform,
    private route : ActivatedRoute) { 
        
                              
  }
    async presentPopover(e: Event) {
    const popover = await this.popoverController.create({
      component: PopovermenuPage,
      event: e,
    });

    await popover.present();

    const { role } = await popover.onDidDismiss();
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
        this.displayname=address["display_name"];
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
myorder;
private _mycommande: Subscription;
private _extrachicken_o: Subscription;
listitems;

ngOnDestroy() {
    this._mycommande.unsubscribe();

    
}
  ngOnInit() {
      console.log("on init bazsket v2")
      try {
                  this._dbobservable = this.authService.getServiceState().subscribe((res) => {
      if(res){
      console.log(res);
        /*this.authService.loggedIn$.subscribe(x=>{
            this.loggedin = x;
            });
        this.authService.ordered$.subscribe(x=>{
            console.log("a commandé ? ", x)
            this.ordered = x;
            console.log("a commandé ? ", x,this.ordered,!this.ordered,typeof x === "undefined" )
               if (typeof x === "undefined" || !this.ordered) {
                   console.log("pas de commande");
            this.myrouter.navigate(["/produitv2"]);
        }
            });
        this.authService.myorder$.subscribe(x=>{
            console.log("MA commande : list : ", x)
            this.myorder = x;
               
            });*/
                    this._mycommande=this.db.macommandestorage$.subscribe(x=>{
            this.listitems=x;
        });

            var x = async () => {
            this.ordered=await this.storage.get("ordered");
            if (!this.ordered){
                //alert("Mal!vous avez mal commandé le repas!")
                console.log("Mal!vous avez mal commandé le repas!")

                this.myrouter.navigate(["/produitv2"]);
            }else{
                //alert("Bravo!vous avez bien commandé le repas!")
                console.log("Bravo!vous avez bien commandé le repas!")
                this.listitems=await this.storage.get("macommandeOK");
            }

            }
            x();
        
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




