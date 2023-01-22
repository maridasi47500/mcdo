import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarrieremcdoPageRoutingModule } from './carrieremcdo-routing.module';

import { CarrieremcdoPage } from './carrieremcdo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarrieremcdoPageRoutingModule
  ],
  declarations: [CarrieremcdoPage]
})
export class CarrieremcdoPageModule {}
