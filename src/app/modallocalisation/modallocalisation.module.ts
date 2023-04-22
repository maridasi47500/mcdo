import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModallocalisationPageRoutingModule } from './modallocalisation-routing.module';

import { ModallocalisationPage } from './modallocalisation.page';
import { FormGroup, FormBuilder, Validators,FormControl } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ModallocalisationPageRoutingModule
  ],
   providers: [FormBuilder],
  declarations: [ModallocalisationPage]
})
export class ModallocalisationPageModule {}
