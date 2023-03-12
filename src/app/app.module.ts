import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormBuilder, Validators, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// plugins
import { SQLite } from '@ionic-native/sqlite/ngx';
import { HttpClientModule } from '@angular/common/http';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { ModalPageModule } from './hamburger/modal.hamburger.module';  
import { CommonModule } from "@angular/common";
import { HamburgerPageModule } from  './hamburger/hamburger.module';  
import { Storage } from '@ionic/storage';

@NgModule({
    
  declarations: [AppComponent],
  imports: [HamburgerPageModule, ModalPageModule, CommonModule,BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [  SQLite,FormBuilder,Storage,
    SQLitePorter,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
