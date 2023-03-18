import { Component, OnInit,OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { interval, Subscription } from 'rxjs';
//import { SMS } from '@ionic-native/sms';
import { FormGroup, FormBuilder, Validators,FormControl } from "@angular/forms";
//import { RegisterPage } from '../register/register.page';
@Component({
  selector: 'app-sms',
  templateUrl: './sms.page.html',
  styleUrls: ['./sms.page.scss'],
})
export class SmsPage implements OnInit,OnDestroy {

 name: string;
temps=200;
telForm;
code=10000;
subscription: Subscription;
//private sms:SMS
//  constructor(private formBuilder:FormBuilder,private modalCtrl: ModalController) {}

  constructor(private formBuilder:FormBuilder,private modalCtrl: ModalController) {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
  confirm() {

    return this.modalCtrl.dismiss(null , 'confirm');
  }
  checkcode($evt){
      console.log(this.code,String(document.querySelector<HTMLInputElement>("#code")!.value));
      if (String(this.code) === String(document.querySelector<HTMLInputElement>("#code")!.value)){
          this.confirm()
      }
  }  
  printcode(){
      console.log(this.code);
  }
  mycode(){
                this.code=this.getRandomInt(10000,99999);
                console.log(this.code)
               // if (!this.register.ionicForm.get('tel').hasError('required')) { 
        //this.sms.send(this.telForm.code, "votre  code ionic macdonalds "+String(this.code)+ "==== bonne commande ====")
                //}
  }
  mytime(){
      
      if (this.temps > 0) {
      this.temps=this.temps - 1;
      } else {
  this.subscription.unsubscribe();
      }
  }
createForm(){
       this.telForm=this.formBuilder.group({code: [null,Validators.required]});
console.log("erreur1????????")
}
  ngOnInit() {
            this.createForm();
//emit value in sequence every 10 second
const source = interval(1000);
const text = 'Your Text Here';
this.subscription = source.subscribe(val => this.mytime());
this.mycode();
  }
ngOnDestroy() {
  this.subscription.unsubscribe();
}

}
