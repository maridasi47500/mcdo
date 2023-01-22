import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RhPageRoutingModule } from './rh-routing.module';

import { RhPage } from './rh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RhPageRoutingModule
  ],
  declarations: [RhPage]
})
export class RhPageModule {}
