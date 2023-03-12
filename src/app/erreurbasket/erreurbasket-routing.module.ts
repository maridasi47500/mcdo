import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErreurbasketPage } from './erreurbasket.page';

const routes: Routes = [
  {
    path: '',
    component: ErreurbasketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErreurbasketPageRoutingModule {}
