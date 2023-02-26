import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Basketv2PageRoutingModule } from './basketv2-routing.module';

import { Basketv2Page } from './basketv2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Basketv2PageRoutingModule
  ],
  declarations: [Basketv2Page]
})
export class Basketv2PageModule {}
