import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Produitv2PageRoutingModule } from './produitv2-routing.module';

import { Produitv2Page } from './produitv2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Produitv2PageRoutingModule
  ],
  declarations: [Produitv2Page]
})
export class Produitv2PageModule {}
