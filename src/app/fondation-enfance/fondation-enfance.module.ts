import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FondationEnfancePageRoutingModule } from './fondation-enfance-routing.module';

import { FondationEnfancePage } from './fondation-enfance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FondationEnfancePageRoutingModule
  ],
  declarations: [FondationEnfancePage]
})
export class FondationEnfancePageModule {}
