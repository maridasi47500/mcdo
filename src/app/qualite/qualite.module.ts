import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QualitePageRoutingModule } from './qualite-routing.module';

import { QualitePage } from './qualite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QualitePageRoutingModule
  ],
  declarations: [QualitePage]
})
export class QualitePageModule {}
