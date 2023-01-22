import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaladePageRoutingModule } from './salade-routing.module';

import { SaladePage } from './salade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaladePageRoutingModule
  ],
  declarations: [SaladePage]
})
export class SaladePageModule {}
