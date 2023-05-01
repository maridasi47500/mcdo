import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators,FormControl } from "@angular/forms";

import { Basketv2PageRoutingModule } from './basketv2-routing.module';
import { Http } from '@angular/http';
import {HttpModule} from '@angular/http';
import { Basketv2Page } from './basketv2.page';
import { NavController, NavParams } from '@ionic/angular';
import { RouterOutlet, ActivationStart } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Basketv2PageRoutingModule,
    ReactiveFormsModule,
    HttpModule
  ],
    declarations: [Basketv2Page],
 providers: [NavParams,RouterOutlet,FormBuilder,NativeStorage]
})
export class Basketv2PageModule {}
