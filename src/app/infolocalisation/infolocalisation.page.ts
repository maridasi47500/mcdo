import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-infolocalisation',
  templateUrl: './infolocalisation.page.html',
  styleUrls: ['./infolocalisation.page.scss'],
})
export class InfolocalisationPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }
title="Informer";
  ngOnInit() {
  }
    cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss("MON NOM", 'confirm');
  }

}
