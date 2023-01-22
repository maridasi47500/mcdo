import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelechargerappPage } from './telechargerapp.page';

const routes: Routes = [
  {
    path: '',
    component: TelechargerappPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelechargerappPageRoutingModule {}
