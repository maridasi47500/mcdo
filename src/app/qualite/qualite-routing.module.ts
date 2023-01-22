import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QualitePage } from './qualite.page';

const routes: Routes = [
  {
    path: '',
    component: QualitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QualitePageRoutingModule {}
