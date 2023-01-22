import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { McdodatePage } from './mcdodate.page';

const routes: Routes = [
  {
    path: '',
    component: McdodatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class McdodatePageRoutingModule {}
