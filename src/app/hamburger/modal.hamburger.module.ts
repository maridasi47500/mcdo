import { NgModule } from '@angular/core';  
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';  
import { Routes, RouterModule } from '@angular/router';  
  
import { IonicModule } from '@ionic/angular';  
  
import { ModalPage } from './modal.hamburger.page';  
  
const routes: Routes = [  
  {  
    path: 'mymodale',  
    component: ModalPage  
  }  
];  
  
@NgModule({  
  imports: [  
    CommonModule,  
    FormsModule,  
    IonicModule,  
    RouterModule.forChild(routes)  
  ],  
  declarations: [ModalPage]  
})  
export class ModalPageModule {}  
