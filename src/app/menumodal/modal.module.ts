import { NgModule } from '@angular/core';  
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';  
import { Routes, RouterModule } from '@angular/router';  
  import { BrowserModule } from '@angular/platform-browser'
import { Component,ElementRef,ViewChild } from '@angular/core';

import { IonicModule } from '@ionic/angular';
import { IonModal, IonItem,IonCard } from '@ionic/angular';

  
import { ModalPage } from './modal.page';  
  
  
  
  
const routes: Routes = [  
  {  
    path: 'mymodale11',  
    component: ModalPage  
  }  
];  
  
@NgModule({  
  imports: [  
    FormsModule,  
    CommonModule,
    IonCard,
    IonicModule,  
    RouterModule.forChild(routes)  
  ],  
  declarations: [ModalPage,IonItem,IonCard]  
})  
export class ModalPageModule {}  
