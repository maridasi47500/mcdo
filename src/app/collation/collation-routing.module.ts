import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollationPage } from './collation.page';

const routes: Routes = [
  {
    path: '',
    component: CollationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollationPageRoutingModule {}
