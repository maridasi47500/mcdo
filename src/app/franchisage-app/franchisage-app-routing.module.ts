import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FranchisageAppPage } from './franchisage-app.page';

const routes: Routes = [
  {
    path: '',
    component: FranchisageAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FranchisageAppPageRoutingModule {}
