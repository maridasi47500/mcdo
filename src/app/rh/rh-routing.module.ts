import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RhPage } from './rh.page';

const routes: Routes = [
  {
    path: '',
    component: RhPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RhPageRoutingModule {}
