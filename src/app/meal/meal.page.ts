import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { BaseDatosLocalProvider } from './../../../services/base-donnees-locale';
import { BehaviorSubject, Observable } from 'rxjs';
import { of, map,Subscription } from 'rxjs';
import { Item } from '../../../services/item';
import { Bicycle } from '../services/bicycle';
import { AnimationController,ModalController } from '@ionic/angular';

import { Flavor } from '../../../services/flavor';
@Component({
  selector: 'app-meal',
  templateUrl: './meal.page.html',
  styleUrls: ['./meal.page.scss'],
})
export class MealPage implements OnInit {
private _burgersobservable: Subscription;
private _dbobservable: Subscription;
private _routeobservable: Subscription;
private _catobservable: Subscription;
constructor(private modalCtrl: ModalController, private db: BaseDatosLocalProvider,private route : ActivatedRoute, private router : Router){}
  
  burger$: Observable<Item> = of(new Item);
  burger: Item = new Item;
id1:string;
 cat: any;
    


 
ngOnDestroy(){
    this._dbobservable.unsubscribe();      
      this._burgersobservable.unsubscribe();
      this._routeobservable.unsubscribe();

}
  ngOnInit() {
       this._burgersobservable = this.db.burgerFound$.subscribe(item => {
           
           this.burger$ = of(item);
           this.burger = item as Item;
   

   
       });
        this._catobservable =this.db.catFound$.subscribe(x=>{
          this.cat = x;
      });
      //this.db.getProgress();
      this._dbobservable = this.db.getDatabaseState().subscribe((res) => {
      if(res){
      this._routeobservable = this.route.paramMap.subscribe(params => {
        
      let id1 = params.get('meal');
      
      this.id1 = id1;
      this.db.getItemByUrl(id1);
      //this.db.getCatById(this.burger.cat_id);
      });
      
  }
      });
  }

}
