import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MacdonaldsCareerPage } from './macdonalds-career.page';

const routes: Routes = [
  {
    path: '',
    component: MacdonaldsCareerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MacdonaldsCareerPageRoutingModule {}
