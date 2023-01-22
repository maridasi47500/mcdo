import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BreuvagePage } from './breuvage.page';

const routes: Routes = [
  {
    path: '',
    component: BreuvagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BreuvagePageRoutingModule {}
