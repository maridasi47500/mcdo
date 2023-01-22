import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MindPage } from './mind.page';

const routes: Routes = [
  {
    path: '',
    component: MindPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MindPageRoutingModule {}
