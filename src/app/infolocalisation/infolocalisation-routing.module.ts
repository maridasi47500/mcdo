import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfolocalisationPage } from './infolocalisation.page';

const routes: Routes = [
  {
    path: '',
    component: InfolocalisationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfolocalisationPageRoutingModule {}
