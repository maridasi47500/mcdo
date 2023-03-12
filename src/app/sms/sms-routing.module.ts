import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmsPage } from './sms.page';

const routes: Routes = [
  {
    path: '',
    component: SmsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmsPageRoutingModule {}
