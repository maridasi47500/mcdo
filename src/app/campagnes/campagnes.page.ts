import { Component, OnInit } from '@angular/core';
import { BaseDatosLocalProvider } from './../../../services/base-donnees-locale';
import { BehaviorSubject, Observable } from 'rxjs';
import { of, map,Subscription } from 'rxjs';
import { Item } from '../../../services/item';
import { Menucat } from './../services/menucat';
import { Menu } from './../services/menu';
@Component({
  selector: 'app-campagnes',
  templateUrl: './campagnes.page.html',
  styleUrls: ['./campagnes.page.scss'],
})
export class CampagnesPage implements OnInit {
         cat: any;  
restos$: Observable<Menu[]> = of([]);
servicesforfaits$: Observable<Menucat[]> = of([]);
private _menusobservable: Subscription;
private _dbobservable: Subscription;
private _restoobservable: Subscription;
private _servicedeforfaitobservable: Subscription;
private _catsobservable: Subscription;
  constructor(private db: BaseDatosLocalProvider) { }

  ngOnInit() {
              
      this._restoobservable = this.db.restosFound$.subscribe(item => {
           
           this.restos$ = of(item);
   

       });
             this._servicedeforfaitobservable =this.db.servicesforfaitsFound$.subscribe(x=>{
          this.servicesforfaits$ = of(x);
      });
           this._dbobservable = this.db.getDatabaseState().subscribe((res) => {
      if(res){
       this.db.getResto();
        this.db.getServicedeforfait();
      }
           })
  }



 public segment: string = "list";
  public arr = new Array(25);
    segmentChanged(ev: any) {
    this.segment = ev.detail.value;
  }
}
