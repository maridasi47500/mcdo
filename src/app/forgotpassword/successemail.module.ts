import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuccessemailPageRoutingModule } from './successemail-routing.module';

import { SuccessemailPage } from './successemail.page';
import { FormGroup, FormBuilder, Validators,FormControl } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuccessemailPageRoutingModule,
    ReactiveFormsModule
  ],
  providers:[FormBuilder],
  declarations: [SuccessemailPage]
})
export class SuccessemailPageModule {}
