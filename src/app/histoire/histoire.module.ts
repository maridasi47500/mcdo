import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoirePageRoutingModule } from './histoire-routing.module';

import { HistoirePage } from './histoire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoirePageRoutingModule
  ],
  declarations: [HistoirePage]
})
export class HistoirePageModule {}
