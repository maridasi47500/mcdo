import { Component, OnInit } from '@angular/core';  
import { ModalController} from '@ionic/angular';  
  
@Component({  
  selector: 'app-modal-hamburger',  
  templateUrl: './modal.hamburger.page.html',  
  styleUrls: ['./modal.hamburger.scss'],  
})  
export class ModalPage implements OnInit {  
  
  constructor(public modalCtrl: ModalController) {}  
  
  ngOnInit() {  
  }  
  dismiss() {  
    this.modalCtrl.dismiss();  
  }  
}  
