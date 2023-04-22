import { Component, OnInit } from '@angular/core';
import { of, map,Subscription } from 'rxjs';
import { BaseDatosLocalProvider } from './../../../services/base-donnees-locale';
import { ActivatedRoute, Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss'],
})
export class SecondComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  nom="";
ville="";
private _routeobservable: Subscription;
private _dbobservable: Subscription;

  ngOnInit() {
    
  this.route.queryParams.subscribe(params => {
  if (params) {
    let queryParams = params;
    console.log(queryParams)
    this.nom=queryParams.nom;
    this.ville=queryParams.ville;
  }
});      
      }
        

}
