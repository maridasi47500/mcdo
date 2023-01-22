import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HamburgerPage } from './hamburger/hamburger.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'mcdonalds-flavors',
    loadChildren: () => import('./saveurs/saveurs.module').then( m => m.SaveursPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'mcdonalds-delicacies/:flavor',
    component: HamburgerPage
  },
  {
    path: 'mcdonalds-delicacies/:flavor/:title',
    loadChildren: () => import('./item/item.module').then( m => m.ItemPageModule)
  },
  {
    path: 'campagnes',
    loadChildren: () => import('./campagnes/campagnes.module').then( m => m.CampagnesPageModule)
  },
  {
    path: 'a-propos-de-nous',
    loadChildren: () => import('./apropos/apropos.module').then( m => m.AproposPageModule)
  },
  {
    path: 'notre-histoire',
    loadChildren: () => import('./histoire/histoire.module').then( m => m.HistoirePageModule)
  },
  {
    path: 'fondation-enfance',
    loadChildren: () => import('./fondation-enfance/fondation-enfance.module').then( m => m.FondationEnfancePageModule)
  },
  {
    path: 'mcdonaldsta-hayat',
    loadChildren: () => import('./rh/rh.module').then( m => m.RhPageModule)
  },
  {
    path: 'rh-bis',
    loadChildren: () => import('./rh-bis/rh-bis.module').then( m => m.RhBisPageModule)
  },
  {
    path: 'mcdonaldsta-life',
    loadChildren: () => import('./viemcdo/viemcdo.module').then( m => m.ViemcdoPageModule)
  },
  {
    path: 'produitv2',
    loadChildren: () => import('./produitv2/produitv2.module').then( m => m.Produitv2PageModule)
  },
  {
    path: 'produitv2/:pid',
    loadChildren: () => import('./menucommande/menucommande.module').then( m => m.MenucommandePageModule)
  },
  {
    path: 'mcdonaldsta-career',
    loadChildren: () => import('./carrieremcdo/carrieremcdo.module').then( m => m.CarrieremcdoPageModule)
  },  
  {
    path: 'minds-to-minds',
    loadChildren: () => import('./mind/mind.module').then( m => m.MindPageModule)
  },
  {
    path: 'franchising',
    loadChildren: () => import('./franchisage/franchisage.module').then( m => m.FranchisagePageModule)
  },
  {
    path: 'franchising-application',
    loadChildren: () => import('./franchisage-app/franchisage-app.module').then( m => m.FranchisageAppPageModule)
  },
  {
    path: 'real-estate-form',
    loadChildren: () => import('./real-estate-form/real-estate-form.module').then( m => m.RealEstateFormPageModule)
  },
  {
    path: 'nous-contacter',
    loadChildren: () => import('./contactus/contactus.module').then( m => m.ContactusPageModule)
  },
  {
    path: 'mcdonaldsin-sirri/nutrition',
    loadChildren: () => import('./nutrition/nutrition.module').then( m => m.NutritionPageModule)
  },
  {
    path: 'mcdonaldsin-sirri/quality',
    loadChildren: () => import('./qualite/qualite.module').then( m => m.QualitePageModule)
  },

  {
    path: 'mcdonaldsin-sirri/tout-ce-qui-vient-a-l-esprit',
    loadChildren: () => import('./toutdemander/toutdemander.module').then( m => m.ToutdemanderPageModule)
  },
  {
    path: 'telechargerapp',
    loadChildren: () => import('./telechargerapp/telechargerapp.module').then( m => m.TelechargerappPageModule)
  },
  {
    path: 'restaurants',
    loadChildren: () => import('./restaurants/restaurants.module').then( m => m.RestaurantsPageModule)
  },
  {
    path: 'item',
    loadChildren: () => import('./item/item.module').then( m => m.ItemPageModule)
  },
  {
    path: 'mcdodate',
    loadChildren: () => import('./mcdodate/mcdodate.module').then( m => m.McdodatePageModule)
  },
  {
    path: 'mcdodate',
    loadChildren: () => import('./mcdodate/mcdodate.module').then( m => m.McdodatePageModule)
  },
    {
    path: ':meal',
    loadChildren: () => import('./meal/meal.module').then( m => m.MealPageModule)
  },
  {
    path: 'meal',
    loadChildren: () => import('./meal/meal.module').then( m => m.MealPageModule)
  },
  {
    path: 'menucommande',
    loadChildren: () => import('./menucommande/menucommande.module').then( m => m.MenucommandePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
