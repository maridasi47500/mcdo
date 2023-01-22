import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaucesPageRoutingModule } from './sauces-routing.module';

import { SaucesPage } from './sauces.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaucesPageRoutingModule
  ],
  declarations: [SaucesPage]
})
export class SaucesPageModule {}
