import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaladePage } from './salade.page';

const routes: Routes = [
  {
    path: '',
    component: SaladePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaladePageRoutingModule {}
