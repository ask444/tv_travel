import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }
  from '@angular/forms';
import { JarwisService } from '../../services/jarwis.service';
import { MatSnackBar, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-updateevent',
  templateUrl: './updateevent.component.html',
  styleUrls: ['./updateevent.component.css']
})
export class UpdateeventComponent implements OnInit {
  startdate: any;
  enddate: any;
  myform: any;
  eveData: any;

  constructor(fb: FormBuilder, public dialogRef: MatDialogRef<UpdateeventComponent>, private snackBar: MatSnackBar, private Jarwis: JarwisService, public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any) {
    // this.startdate = startOfDay(new Date());
    // this.enddate = startOfDay(new Date());
    this.eveData = data;
    this.myform = fb.group({
      "title": data.title,
      "primarycolor": data.color,
      "startdate": data.start,
      "enddate": data.end,
      "draggable": data.draggable,
      "resizable": data.resizable
    });

  }

  ngOnInit() {
  }

  updateEvent(ele) {
    const eventsdata = ele;
    eventsdata.id = this.eveData.id;
    this.Jarwis.updateEvent(JSON.stringify(eventsdata))
      .subscribe((data: any) => {
        if (data.status == true) {
          this.dialogRef.close(data);
        }
        else {
          this.dialogRef.close(data);
        }
      },
        error => {
          console.log(error, "error");
        }

      );


  }

}
