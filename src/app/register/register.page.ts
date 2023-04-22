import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from "@angular/forms";
import { BaseDatosLocalProvider } from './../../../services/base-donnees-locale';
import { BehaviorSubject, Observable } from 'rxjs';
import { ActivatedRoute, Router,ParamMap} from '@angular/router';
import { ModalController } from '@ionic/angular';
import { SmsPage } from '../sms/sms.page';
import { AuthService } from '../../../services/authservice';
import { of, map,Subscription,takeUntil } from 'rxjs';
import { User } from './../services/user';
import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
ionicForm=this.formBuilder.group({lutexte: [null,Validators.requiredTrue],emailcommercial: [null],email: [null,Validators.required],mdp: [null,Validators.required],mdp2:[null,Validators.required],nom:[null,Validators.required],tel:[null,Validators.required]});
;
myvalidphonenumber;
myvalidemail;
message;
submitted=false;
isModal1Open=false;
  setOpen1(isOpen: boolean) {
    this.isModal1Open = isOpen;
  }
  isModal2Open=false;
  setOpen2(isOpen: boolean) {
    this.isModal2Open = isOpen;
  }
    isModal3Open=false;
  setOpen3(isOpen: boolean) {
    this.isModal3Open = isOpen;
  }
private _userobservable: Subscription;
private _userregisterobservable: Subscription;
private _dbobservable: Subscription;
users$: Observable<User[]> = of([]);
  constructor( private navCtrl: NavController,private formBuilder:FormBuilder,private auth: AuthService,private myrouter:Router,private db:BaseDatosLocalProvider,private modalCtrl: ModalController) { }
createForm(){
       this.ionicForm=this.formBuilder.group({lutexte: [null,Validators.requiredTrue],emailcommercial: [null],email: [null,Validators.required],mdp: [null,Validators.required],mdp2:[null,Validators.required],nom:[null,Validators.required],tel:[null,Validators.required]});
console.log("erreur1????????")
}
  ngOnInit() {
      console.log("erreur1")
      this.createForm();
              this._userobservable = this.db.users$.subscribe(item => {
           //this.users$ = of(item);
           if(typeof item === "undefined" || !item[0]) {
               console.log("erreur1??",item)
               this.myvalidemail=true;

           }
           
       });
                     this._userregisterobservable = this.db.usersregister$.subscribe(item => {
           //this.users$ = of(item);
           if(typeof item !== "undefined" && item[0]) {
               console.log("erreur1??, 1 utilsiateur inscrit",item)
                this.auth.setLogged(item[0]);
                this.navCtrl.back();
           }
           
       });
       console.log("erreur1????")
  }
  inscription(){
    this.submitted=true;
//this.ionicForm.submit();
var form=this.ionicForm.value;
this.db.getallusersbyemail(form.email);
if (!this.ionicForm.get('nom').hasError('required') && !this.ionicForm.get('lutexte').hasError('required')) {
    this.openSmsModal();
}
if (this.ionicForm.get('lutexte').hasError('required')){
    this.setOpen1(true);
}
if (!this.ionicForm.get('lutexte').hasError('required') && this.myvalidphonenumber && this.myvalidemail && this.ionicForm.valid && form.mdp === form.mdp2) {
    //this.db.createuser(form.emailcommercial,form.email,form.mdp,form.nom,form.tel)
    //this.myrouter.navigate(["/"]);
};
}
async openSmsModal(){
        const modal = await this.modalCtrl.create({
      component: SmsPage,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
    var form=this.ionicForm.value;
    if (role === 'confirm' && form.mdp === form.mdp2) {
        alert("ok")
        this.db.createuser(form.email,form.email,form.mdp,form.nom,form.tel)
      this.message = `inscription réussie!`;
      var user=this.db.getuserbyemail(form.email);
      this.auth.connecterutilisateur(form.email);
      this.myrouter.navigate(["/panierv2"]);
      
    }else{
        this.message = `inscription râtée!`;
    }
}
declaration($ev) {
    this.setOpen1(true);
}
mylink($ev){
this.setOpen2(true);
}
textemodal($ev) {
    this.setOpen3(true);
}
}
