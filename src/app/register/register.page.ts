import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from "@angular/forms";
import { BaseDatosLocalProvider } from './../../../services/base-donnees-locale';
import { BehaviorSubject, Observable } from 'rxjs';
import { ActivatedRoute, Router,ParamMap} from '@angular/router';
import { ModalController } from '@ionic/angular';
import { SmsPage } from '../sms/sms.page';
import { of, map,Subscription,takeUntil } from 'rxjs';
import { User } from './../services/user';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
ionicForm;
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
private _dbobservable: Subscription;
users$: Observable<User[]> = of([]);
  constructor(private formBuilder:FormBuilder,private myrouter:Router,private db:BaseDatosLocalProvider,private modalCtrl: ModalController) { }
createForm(){
       this.ionicForm=this.formBuilder.group({lutexte: [null,Validators.requiredTrue],emailcommercial: [null],email: [null,Validators.required],mdp: [null,Validators.required],mdp2:[null,Validators.required],nom:[null,Validators.required],tel:[null,Validators.required]});
console.log("erreur1????????")
}
  ngOnInit() {
      console.log("erreur1")
      this.createForm();
              this._userobservable = this.db.users$.subscribe(item => {
           //this.users$ = of(item);
           if(!item[0]) {
               console.log("erreur1??")
               this.myvalidemail=true;
                
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

    if (role === 'confirm') {
      this.message = `Hello, ${data}!`;
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
