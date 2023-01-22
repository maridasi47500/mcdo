import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetitdejPage } from './petitdej.page';

const routes: Routes = [
  {
    path: '',
    component: PetitdejPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetitdejPageRoutingModule {}
