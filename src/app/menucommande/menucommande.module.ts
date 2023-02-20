import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenucommandePageRoutingModule } from './menucommande-routing.module';

import { MenucommandePage } from './menucommande.page';
import { ModalPage } from '../menumodal/modal.page';
import { PanierPage } from '../menupanier/modal.page';

import { FormBuilder, Validators, ReactiveFormsModule } from "@angular/forms";

import { RouterOutlet, ActivationStart } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenucommandePageRoutingModule,
    ReactiveFormsModule
    
  ],
  providers: [MenucommandePage,RouterOutlet],
  declarations: [MenucommandePage,ModalPage,PanierPage]
})
export class MenucommandePageModule {}
