import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModallocalisationPageRoutingModule } from './modallocalisation-routing.module';

import { ModallocalisationPage } from './modallocalisation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModallocalisationPageRoutingModule
  ],
  declarations: [ModallocalisationPage]
})
export class ModallocalisationPageModule {}
