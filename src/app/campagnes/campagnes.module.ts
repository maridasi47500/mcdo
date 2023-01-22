import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CampagnesPageRoutingModule } from './campagnes-routing.module';

import { CampagnesPage } from './campagnes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CampagnesPageRoutingModule
  ],
  declarations: [CampagnesPage]
})
export class CampagnesPageModule {}
