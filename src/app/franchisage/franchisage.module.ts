import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FranchisagePageRoutingModule } from './franchisage-routing.module';

import { FranchisagePage } from './franchisage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FranchisagePageRoutingModule
  ],
  declarations: [FranchisagePage]
})
export class FranchisagePageModule {}
