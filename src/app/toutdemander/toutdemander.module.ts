import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToutdemanderPageRoutingModule } from './toutdemander-routing.module';

import { ToutdemanderPage } from './toutdemander.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToutdemanderPageRoutingModule
  ],
  declarations: [ToutdemanderPage]
})
export class ToutdemanderPageModule {}
