import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ErreurbasketPageRoutingModule } from './erreurbasket-routing.module';

import { ErreurbasketPage } from './erreurbasket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ErreurbasketPageRoutingModule
  ],
  declarations: [ErreurbasketPage]
})
export class ErreurbasketPageModule {}
