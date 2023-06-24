import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopovermenuPage } from './popovermenu.page';

const routes: Routes = [
  {
    path: '',
    component: PopovermenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopovermenuPageRoutingModule {}
