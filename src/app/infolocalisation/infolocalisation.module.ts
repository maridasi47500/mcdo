import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfolocalisationPageRoutingModule } from './infolocalisation-routing.module';

import { InfolocalisationPage } from './infolocalisation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfolocalisationPageRoutingModule
  ],
  declarations: [InfolocalisationPage]
})
export class InfolocalisationPageModule {}
