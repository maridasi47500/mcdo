import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotpasswordPageRoutingModule } from './forgotpassword-routing.module';

import { ForgotpasswordPage } from './forgotpassword.page';
import { FormGroup, FormBuilder, Validators,FormControl } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotpasswordPageRoutingModule,
    ReactiveFormsModule
  ],
  providers:[FormBuilder],
  declarations: [ForgotpasswordPage]
})
export class ForgotpasswordPageModule {}
