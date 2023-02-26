import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirtsPageRoutingModule } from './firts-routing.module';

import { FirtsPage } from './firts.page';
import { FormBuilder, Validators, ReactiveFormsModule } from "@angular/forms";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirtsPageRoutingModule,FormBuilder
  ],
  providers:[FormBuilder],
  declarations: [FirtsPage]
})
export class FirtsPageModule {}
