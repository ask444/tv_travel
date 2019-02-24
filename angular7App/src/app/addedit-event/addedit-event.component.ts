import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }
  from '@angular/forms';
import { MatSnackBar, MatDialog } from '@angular/material';
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
import { UpdateeventComponent } from '../components/updateevent/updateevent.component';
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
  responseData: any;


  constructor(fb: FormBuilder, public dialog: MatDialog, private Jarwis: JarwisService, private snackBar: MatSnackBar) {

    this.startdate = startOfDay(new Date());
    this.enddate = startOfDay(new Date());
    this.myform = fb.group({
      "title": this.title,
      "primarycolor": this.primarycolor,
      "startdate": this.startdate,
      "enddate": this.enddate,
      "draggable": true,
      "resizable": true
    });


  }

  ngOnInit() {
    this.geteventslist();
  }
  geteventslist() {
    this.Jarwis.geteventsList().subscribe(
      (data: any) => {
        console.log("my data:", data);
        this.responseData = data.data;
      }
    );
  }
  onSubmit() {
    if (this.myform.valid) {
      console.log("Form Submitted!");
      console.log(this.myform.value);
      this.Jarwis.createEvent(JSON.stringify(this.myform.value))
        .subscribe(
          data => console.log('Data:', data),
          err => console.log(err),
          () => console.log('complete')
        );
      // this.myform.reset();
    }
  }

  deleteEvent(ele) {
    const eventdata = { event_id: ele.id }
    this.Jarwis.deleteEvent(JSON.stringify(eventdata))
      .subscribe((data: any) => {
        console.log('Data:', data);
        if (data.status == true) {
          this.snackBar.open("Event deleted successfully.", "Event", {
            duration: 2000,
          });
          this.geteventslist();
        }
        else {
          this.snackBar.open("Failed to delete event.", "Event", {
            duration: 2000,
          });
        }
      })
  }

  editEvent(ele) {
    const dialogRef = this.dialog.open(UpdateeventComponent, {
      width: '500px',
      data: ele
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result.status == true) {
        this.snackBar.open("Event updated successfully.", "Event", {
          duration: 2000,
        });
        this.geteventslist();
      }
      else {
        this.snackBar.open("Failed to update an event.", "Event", {
          duration: 2000,
        });
      }
    });
  }


}
