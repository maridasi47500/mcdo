import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';
@Component({
  selector: 'app-erreurbasket',
  templateUrl: './erreurbasket.page.html',
  styleUrls: ['./erreurbasket.page.scss'],
})
export class ErreurbasketPage implements OnInit {

 constructor(private route: ActivatedRoute,private router:Router) {}
message="Nous n'avons pas de restaurant desservant l'adresse que vous avez choisie.";
mybtn="faire demi-tour";
myaction1="/basket";
  ngOnInit() {
      this.route.queryParams.subscribe(params => {
    this.message = params["mymessage"];
    this.mybtn = params["mybtn"];
    this.myaction1 = params["myaction1"];
});
  }
  myaction(){
      this.router.navigate([this.myaction1]);
  }

}
