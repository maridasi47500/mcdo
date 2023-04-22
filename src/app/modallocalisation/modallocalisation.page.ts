import { Component, OnInit,OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-modallocalisation',
  templateUrl: './modallocalisation.page.html',
  styleUrls: ['./modallocalisation.page.scss'],
})
export class ModallocalisationPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {

    return this.modalCtrl.dismiss(null , 'confirm');
  }
}
