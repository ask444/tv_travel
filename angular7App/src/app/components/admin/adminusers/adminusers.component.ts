import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JarwisService } from '../../../services/jarwis.service';
import { MatDialog, MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UpdateusersComponent } from '../../updateusers/updateusers.component';

@Component({
  selector: 'app-adminusers',
  templateUrl: './adminusers.component.html',
  styleUrls: ['./adminusers.component.css']
})
export class AdminusersComponent implements OnInit {

  httpData: any;

  constructor(public dialog: MatDialog, private snackBar: MatSnackBar, private http: HttpClient, private Jarwis: JarwisService) { }


  ngOnInit() {
    // this.getData();
    this.getusers();
  }

  getusers() {
    this.Jarwis.getusersList().subscribe((data: any) => {
      this.httpData = data.data;
    })
  }

  editUser(ele) {

    const dialogRef = this.dialog.open(UpdateusersComponent, {
      width: '500px',
      data: ele
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result.status == true) {
        this.snackBar.open("User role updated successfully", "User Role", {
          duration: 2000,
        });
        this.getusers();
      }
      else {
        this.snackBar.open("Failed to update user role", "User Role", {
          duration: 2000,
        });
      }


    });


  }
}
