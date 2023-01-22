import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CollationPageRoutingModule } from './collation-routing.module';

import { CollationPage } from './collation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CollationPageRoutingModule
  ],
  declarations: [CollationPage]
})
export class CollationPageModule {}
