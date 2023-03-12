import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModallocalisationPage } from './modallocalisation.page';

const routes: Routes = [
  {
    path: '',
    component: ModallocalisationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModallocalisationPageRoutingModule {}
