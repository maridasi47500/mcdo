import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaveursPage } from './saveurs.page';

const routes: Routes = [
  {
    path: '',
    component: SaveursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaveursPageRoutingModule {}
