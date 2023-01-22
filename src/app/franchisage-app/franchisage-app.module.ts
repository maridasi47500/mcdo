import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FranchisageAppPageRoutingModule } from './franchisage-app-routing.module';

import { FranchisageAppPage } from './franchisage-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FranchisageAppPageRoutingModule
  ],
  declarations: [FranchisageAppPage]
})
export class FranchisageAppPageModule {}
