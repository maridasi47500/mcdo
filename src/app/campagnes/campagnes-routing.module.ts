import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampagnesPage } from './campagnes.page';

const routes: Routes = [
  {
    path: '',
    component: CampagnesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampagnesPageRoutingModule {}
