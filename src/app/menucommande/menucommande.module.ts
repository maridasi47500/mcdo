import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenucommandePageRoutingModule } from './menucommande-routing.module';

import { MenucommandePage } from './menucommande.page';
import { ModalPage } from '../menumodal/modal.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenucommandePageRoutingModule
  ],
  declarations: [MenucommandePage,ModalPage]
})
export class MenucommandePageModule {}
