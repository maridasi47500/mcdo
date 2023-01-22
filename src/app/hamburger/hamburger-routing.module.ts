import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HamburgerPage } from './hamburger.page';
import { CommonModule } from '@angular/common';

const routes: Routes = [

    {
    path: 'mcdonalds-delicacies/:flavor',
    component: HamburgerPage
  },
];

@NgModule({
  imports: [CommonModule,RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HamburgerPageRoutingModule {}
