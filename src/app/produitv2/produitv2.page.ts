import { Component, OnInit } from '@angular/core';
import { BaseDatosLocalProvider } from './../../../services/base-donnees-locale';
import { BehaviorSubject, Observable } from 'rxjs';
import { of, map,Subscription } from 'rxjs';
import { Item } from '../../../services/item';
import { Menucat } from './../services/menucat';
import { Menu } from './../services/menu';
@Component({
  selector: 'app-produitv2',
  templateUrl: './produitv2.page.html',
  styleUrls: ['./produitv2.page.scss'],
})
export class Produitv2Page implements OnInit {
          cat: any;  
menus$: Observable<Menu[]> = of([]);
menucats$: Observable<Menucat[]> = of([]);
private _menusobservable: Subscription;
private _dbobservable: Subscription;
private _routeobservable: Subscription;
private _catobservable: Subscription;
private _catsobservable: Subscription;
  constructor(private db: BaseDatosLocalProvider) { }

  ngOnInit() {
                this._catobservable =this.db.menucatFound$.subscribe(x=>{
          this.cat = x;
      });
      this._menusobservable = this.db.menusFound$.subscribe(item => {
           
           this.menus$ = of(item);
   

       });
             this._catsobservable =this.db.menuListFilled$.subscribe(x=>{
          this.menucats$ = of(x);
      });
       this.db.getMenucats();
  }
 public segment: string = "list";
  public arr = new Array(25);
    segmentChanged(ev: any) {
    this.segment = ev.detail.value;
    this.db.getMenuCatByUrl(this.segment);
  }
}
