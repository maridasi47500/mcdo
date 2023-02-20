import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MacdonaldsCareerPageRoutingModule } from './macdonalds-career-routing.module';

import { MacdonaldsCareerPage } from './macdonalds-career.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MacdonaldsCareerPageRoutingModule
  ],
  declarations: [MacdonaldsCareerPage]
})
export class MacdonaldsCareerPageModule {}
