import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { McdodatePageRoutingModule } from './mcdodate-routing.module';

import { McdodatePage } from './mcdodate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    McdodatePageRoutingModule
  ],
  declarations: [McdodatePage]
})
export class McdodatePageModule {}
