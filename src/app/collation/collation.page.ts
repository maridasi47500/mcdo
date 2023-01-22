import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collation',
  templateUrl: './collation.page.html',
  styleUrls: ['./collation.page.scss'],
})
export class CollationPage implements OnInit {
 burgers=[{name: "snack 1",description:"snack 1"},{name: "snack 2",description:"desc 2"}]

  constructor() { }

  ngOnInit() {
  }

}
