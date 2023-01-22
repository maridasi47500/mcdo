import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RhBisPageRoutingModule } from './rh-bis-routing.module';

import { RhBisPage } from './rh-bis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RhBisPageRoutingModule
  ],
  declarations: [RhBisPage]
})
export class RhBisPageModule {}
