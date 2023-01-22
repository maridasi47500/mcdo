import { Component,ElementRef,ViewChild } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';  
import { IonicModule } from '@ionic/angular';
import { IonModal, IonItem } from '@ionic/angular';
import { HamburgerPageRoutingModule } from './hamburger-routing.module';

import { ModalPage } from './modal.hamburger.page'
import { HamburgerPage } from './hamburger.page';
const routes: Routes = [  
  {  
    path: '/mcdonalds-delicacies/:value',  
    component: HamburgerPage  
  }  
];  
  
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HamburgerPageRoutingModule
  ],
  declarations: [HamburgerPage]
})
export class HamburgerPageModule {}
