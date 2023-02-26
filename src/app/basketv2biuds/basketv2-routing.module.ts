import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Basketv2Page } from './basketv2.page';

const routes: Routes = [
  {
    path: '',
    component: Basketv2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Basketv2PageRoutingModule {}
