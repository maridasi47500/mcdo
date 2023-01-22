import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MindPageRoutingModule } from './mind-routing.module';

import { MindPage } from './mind.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MindPageRoutingModule
  ],
  declarations: [MindPage]
})
export class MindPageModule {}
