import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarrieremcdoPage } from './carrieremcdo.page';

const routes: Routes = [
  {
    path: '',
    component: CarrieremcdoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarrieremcdoPageRoutingModule {}
