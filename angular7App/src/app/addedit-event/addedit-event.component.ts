import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }
  from '@angular/forms';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { JarwisService } from '../../../src/app/services/jarwis.service';

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

  title = new FormControl("", Validators.required);
  // email = new FormControl("", [
  //   Validators.required,
  //   Validators.pattern("[^ @]*@[^ @]*")
  // ]);

  language = new FormControl("", Validators.required);
  primarycolor: any;
  startdate: any;
  enddate: any;


  constructor(fb: FormBuilder, private Jarwis: JarwisService) {

    this.startdate = startOfDay(new Date());
    this.enddate = startOfDay(new Date());
    this.myform = fb.group({
      "title": this.title,
      "primarycolor": this.primarycolor,
      "startdate": this.startdate,
      "enddate": this.enddate,
      "draggable": true,
      "resizable": {
        beforeStart: true,
        afterEnd: true
      }
    });


  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.myform.valid) {
      console.log("Form Submitted!");
      console.log(this.myform.value);
      this.Jarwis.createEvent(JSON.stringify(this.myform.value)).subscribe(
        data => (data),
        error => console.log(error)
      );
      this.myform.reset();
    }
  }


}
