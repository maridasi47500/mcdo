import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BreuvagePageRoutingModule } from './breuvage-routing.module';

import { BreuvagePage } from './breuvage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BreuvagePageRoutingModule
  ],
  declarations: [BreuvagePage]
})
export class BreuvagePageModule {}
