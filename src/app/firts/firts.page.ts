import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { BaseDatosLocalProvider } from './../../../services/base-donnees-locale';
import { BehaviorSubject, Observable } from 'rxjs';
import { of, map,Subscription,takeUntil } from 'rxjs';
import { NavController, NavParams } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators,FormControl } from "@angular/forms";

@Component({
  selector: 'app-firts',
  templateUrl: './firts.page.html',
  styleUrls: ['./firts.page.scss'],
})
export class FirtsPage implements OnInit {
private _menuobservable: Subscription;

  constructor( private formBuilder:FormBuilder, private bdd: BaseDatosLocalProvider,private route: ActivatedRoute,private myroute: Router) { }
name;
menus;
ionicForm;
  ngOnInit() {
        this.route.queryParams.subscribe(params => {
    this.name = params['name'];
    console.log(this.name);
  });
        this._menuobservable = this.bdd.menuFound$.subscribe(item => {
      console.log("menu 1")
      this.menus=item;
       });
       this.bdd.getallmenus();
       this.createForm();
  }
      createForm() {
        //alert("ok")
       this.ionicForm=this.formBuilder.group({nom: [null],ville:[null]});
       console.log(this.ionicForm.value,"valueee");
       //alert("ok")
    }
  autrecomposant($evt){
      console.log("erdge dsfhh");
     var elements=(document.getElementsByTagName("input") as HTMLCollectionOf<HTMLInputElement>);
     console.log(elements);
     var form={};
     for (var i = 0;i<elements.length; i++) {
         console.log(elements[i].id,elements[i].value);
         form[elements[i].id] = elements[i].value;
     }
     console.log(form);
     this.ionicForm.setValue(form);
    this.myroute.navigate(["/second-component"],{queryParams:this.ionicForm.value})
  }

}
