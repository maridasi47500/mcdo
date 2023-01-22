import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViemcdoPageRoutingModule } from './viemcdo-routing.module';

import { ViemcdoPage } from './viemcdo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViemcdoPageRoutingModule
  ],
  declarations: [ViemcdoPage]
})
export class ViemcdoPageModule {}
