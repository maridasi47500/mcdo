import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HappymealPage } from './happymeal.page';

const routes: Routes = [
  {
    path: '',
    component: HappymealPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HappymealPageRoutingModule {}
