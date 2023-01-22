import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealEstateFormPage } from './real-estate-form.page';

const routes: Routes = [
  {
    path: '',
    component: RealEstateFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealEstateFormPageRoutingModule {}
