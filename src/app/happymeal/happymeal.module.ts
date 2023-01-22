import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HappymealPageRoutingModule } from './happymeal-routing.module';

import { HappymealPage } from './happymeal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HappymealPageRoutingModule
  ],
  declarations: [HappymealPage]
})
export class HappymealPageModule {}
