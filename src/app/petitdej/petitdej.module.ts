import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PetitdejPageRoutingModule } from './petitdej-routing.module';

import { PetitdejPage } from './petitdej.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PetitdejPageRoutingModule
  ],
  declarations: [PetitdejPage]
})
export class PetitdejPageModule {}
