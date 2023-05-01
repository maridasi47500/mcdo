import { Component } from '@angular/core';
import {AuthService} from '../../services/authservice';

import { Platform } from '@ionic/angular';

import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  private isLoggedIn$: Observable<boolean>;
  datastorage: any;
  patient_name: string;
  patient_no: string;

constructor(
    private platform: Platform,
    private storage: Storage,
    private authService: AuthService,
    public navCtrl: NavController
  ) {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.checkLogin();
          this.storage.create();
          this.storage.clear();
  }

private checkLogin() {
    this.isLoggedIn$.subscribe(value => {
        if (value) {
            this.storage.get('storage_xxx').then((res)=>{
                if (res !== null) {
                    this.datastorage=res;
                    this.patient_name = this.datastorage.patient_name;
                    this.patient_no = this.datastorage.patient_no;
                    this.navCtrl.navigateRoot('/home');
                }
            }); 
        } else {
            this.patient_name = "";
            this.patient_no = "";
        }
    });
}
}
