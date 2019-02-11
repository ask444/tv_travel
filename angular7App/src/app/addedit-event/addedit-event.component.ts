import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }
  from '@angular/forms';

@Component({
  selector: 'app-addedit-event',
  templateUrl: './addedit-event.component.html',
  styleUrls: ['./addedit-event.component.css']
})
export class AddeditEventComponent implements OnInit {
  myform: FormGroup;
  langs: string[] = [
    'English',
    'French',
    'German',
  ]

  firstName = new FormControl("", Validators.required);
  lastName = new FormControl("", Validators.required);
  email = new FormControl("", [
    Validators.required,
    Validators.pattern("[^ @]*@[^ @]*")
  ]);
  password = new FormControl("", [
    Validators.required,
    Validators.minLength(8)
  ]);
  language = new FormControl("", Validators.required);


  constructor(fb: FormBuilder) {

    this.myform = fb.group({
      "firstName": this.firstName,
      "lastName": this.lastName,
      "email": this.email,
      "password": this.password,
      "language": this.language
    });


  }

  ngOnInit() {
  }

}
