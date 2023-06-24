import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopovermenuPageRoutingModule } from './popovermenu-routing.module';

import { PopovermenuPage } from './popovermenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopovermenuPageRoutingModule
  ],
  declarations: [PopovermenuPage]
})
export class PopovermenuPageModule {}
