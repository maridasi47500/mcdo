import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MacdonaldsLifePage } from './macdonalds-life.page';

const routes: Routes = [
  {
    path: '',
    component: MacdonaldsLifePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MacdonaldsLifePageRoutingModule {}
