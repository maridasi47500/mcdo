import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToutdemanderPage } from './toutdemander.page';

const routes: Routes = [
  {
    path: '',
    component: ToutdemanderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToutdemanderPageRoutingModule {}
