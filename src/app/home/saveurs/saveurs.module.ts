import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaveursPageRoutingModule } from './saveurs-routing.module';

import { SaveursPage } from './saveurs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaveursPageRoutingModule
  ],
  declarations: [SaveursPage]
})
export class SaveursPageModule {}
