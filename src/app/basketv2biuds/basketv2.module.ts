import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Basketv2PageRoutingModule } from './basketv2-routing.module';

import { Basketv2Page } from './basketv2.page';
import { NavController, NavParams } from '@ionic/angular';
import { RouterOutlet, ActivationStart } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Basketv2PageRoutingModule
  ],
  declarations: [Basketv2Page],
 providers: [NavParams,RouterOutlet]
})
export class Basketv2PageModule {}
