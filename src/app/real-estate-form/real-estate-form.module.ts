import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RealEstateFormPageRoutingModule } from './real-estate-form-routing.module';

import { RealEstateFormPage } from './real-estate-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RealEstateFormPageRoutingModule
  ],
  declarations: [RealEstateFormPage]
})
export class RealEstateFormPageModule {}
