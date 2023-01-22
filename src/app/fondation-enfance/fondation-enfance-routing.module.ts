import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FondationEnfancePage } from './fondation-enfance.page';

const routes: Routes = [
  {
    path: '',
    component: FondationEnfancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FondationEnfancePageRoutingModule {}
