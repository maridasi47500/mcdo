import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,ParamMap} from '@angular/router';

@Component({
  selector: 'app-successemail',
  templateUrl: './successemail.page.html',
  styleUrls: ['./successemail.page.scss'],
})
export class SuccessemailPage implements OnInit {

  constructor(private myrouter:Router) { }

  ngOnInit() {
  }
login() {
    this.myrouter.navigate(["/login"])
}
}
