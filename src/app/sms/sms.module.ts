import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators,FormControl } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

import { SmsPageRoutingModule } from './sms-routing.module';
import { SMS } from '@ionic-native/sms';
import { SmsPage } from './sms.page';
//import { RegisterPage } from '../register/register.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SmsPageRoutingModule,
    ReactiveFormsModule
  ],
//  providers:[RegisterPage],
   //providers:[SMS],
     providers: [FormBuilder],
  declarations: [SmsPage]
})
export class SmsPageModule {}
