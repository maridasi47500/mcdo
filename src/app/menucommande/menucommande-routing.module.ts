import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenucommandePage } from './menucommande.page';

const routes: Routes = [
  {
    path: '',
    component: MenucommandePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenucommandePageRoutingModule {}
