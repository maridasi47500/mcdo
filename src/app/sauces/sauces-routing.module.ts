import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaucesPage } from './sauces.page';

const routes: Routes = [
  {
    path: '',
    component: SaucesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaucesPageRoutingModule {}
