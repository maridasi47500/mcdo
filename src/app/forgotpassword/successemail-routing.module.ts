import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuccessemailPage } from './successemail.page';

const routes: Routes = [
  {
    path: '',
    component: SuccessemailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuccessemailPageRoutingModule {}
