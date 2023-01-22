import { Component,ElementRef,ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { BaseDatosLocalProvider } from './../../../services/base-donnees-locale';
import { IonSlides } from '@ionic/angular';


import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { AnimationController,ModalController } from '@ionic/angular';
import { ModalPage } from '../hamburger/modal.hamburger.page';  

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
      @ViewChild(IonSlides) slides: IonSlides;

  goToSlide() {
    this.slides.slideTo(2, 500);
  }
        
 constructor(private modalCtrl: ModalController, private animationCtrl: AnimationController,private menu: MenuController, private elementRef: ElementRef,private db: BaseDatosLocalProvider) {}
presentingElement = null;

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
  }
 

  openEnd() {
    this.menu.open('end');
   

  }
 closeFranchisage() {
    
    this.menu.enable(true, 'custom');
  
this.menu.enable(false, 'franchisage');

    alert(this.elementRef.nativeElement.querySelector('.openfranchisage'))
this.elementRef.nativeElement.querySelector('.openfranchisage').removeEventListener('click', this.openFranchisage.bind(this));
this.elementRef.nativeElement.querySelector('.openfranchisage').addEventListener('click', this.openFranchisage.bind(this));
 
    

  }
   closeRh() {
    
    this.menu.enable(true, 'custom');
  
this.menu.enable(false, 'rh');

    alert(this.elementRef.nativeElement.querySelector('.openrh'))
this.elementRef.nativeElement.querySelector('.openrh').removeEventListener('click', this.openRh.bind(this));
this.elementRef.nativeElement.querySelector('.openrh').addEventListener('click', this.openRh.bind(this));
 
    

  }
    async closeCustom() {
    this.menu.toggle('custom');
if (await !this.menu.isOpen()) {
  // perform the requested page navigation
   this.menu.enable(true, 'custom');
}
   
    alert(JSON.stringify(this.menu))
 }
  async openCustom() {
alert(JSON.stringify(this.menu))
    
    this.menu.open('custom');
    if (await this.menu.isOpen()) {
  // perform the requested page navigation
this.menu.enable(true, 'custom');
}
  }
    openFranchisage() {
         this.menu.open('franchisage')
          
  // perform the requested page navigation
this.menu.enable(true, 'franchisage');


    

  }
      openRh() {
         this.menu.open('rh')
          
  // perform the requested page navigation
this.menu.enable(true, 'rh');


    

  }
   //async presentModal() {
    enterAnimation = (baseEl: any) => {
      const root = baseEl.shadowRoot;

      const backdropAnimation = this.animationCtrl.create()
        .addElement(root.querySelector('ion-backdrop')!)
        .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

      const wrapperAnimation = this.animationCtrl.create()
        .addElement(root.querySelector('.modal-wrapper')!)
        .keyframes([
          { offset: 0, opacity: '0', transform: 'scale(0)' },
          { offset: 1, opacity: '0.99', transform: 'scale(1)' }
        ]);

      return this.animationCtrl.create()
        .addElement(baseEl)
        .easing('ease-out')
        .duration(500)
        .addAnimation([backdropAnimation, wrapperAnimation]);
    }

    leaveAnimation = (baseEl: any) => {
      return this.enterAnimation(baseEl).direction('reverse');
    }

    /*const modal = await this.modalCtrl.create({
      component: HomePage,
      enterAnimation,
      leaveAnimation
    });*/
    //return await modal.present();
  //}  
@ViewChild(IonModal) modal: IonModal;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
}

function MyModal(MyModal: any) {
    throw new Error('Function not implemented.');
}
