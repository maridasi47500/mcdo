import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from "@angular/forms";

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {

 ionicForm;
  constructor(private formBuilder:FormBuilder) { }
createForm(){
       this.ionicForm=this.formBuilder.group({email: [null]});

}
  ngOnInit() {
      this.createForm();
  }
}
