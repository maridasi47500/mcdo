import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotpasswordPage } from './forgotpassword.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotpasswordPage
  },
  {
    path: 'successemail',
    loadChildren: () => import('./successemail.module').then( m => m.SuccessemailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotpasswordPageRoutingModule {}
