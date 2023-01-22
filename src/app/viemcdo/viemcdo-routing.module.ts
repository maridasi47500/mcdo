import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViemcdoPage } from './viemcdo.page';

const routes: Routes = [
  {
    path: '',
    component: ViemcdoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViemcdoPageRoutingModule {}
