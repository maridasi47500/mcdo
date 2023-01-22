import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Produitv2Page } from './produitv2.page';

const routes: Routes = [
  {
    path: '',
    component: Produitv2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Produitv2PageRoutingModule {}
