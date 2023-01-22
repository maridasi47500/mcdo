import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelechargerappPageRoutingModule } from './telechargerapp-routing.module';

import { TelechargerappPage } from './telechargerapp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelechargerappPageRoutingModule
  ],
  declarations: [TelechargerappPage]
})
export class TelechargerappPageModule {}
