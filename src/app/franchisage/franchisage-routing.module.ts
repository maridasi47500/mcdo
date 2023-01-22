import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FranchisagePage } from './franchisage.page';

const routes: Routes = [
  {
    path: '',
    component: FranchisagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FranchisagePageRoutingModule {}
