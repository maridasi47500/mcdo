import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RhBisPage } from './rh-bis.page';

const routes: Routes = [
  {
    path: '',
    component: RhBisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RhBisPageRoutingModule {}
