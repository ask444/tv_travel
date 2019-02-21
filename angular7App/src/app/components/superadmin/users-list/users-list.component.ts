import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JarwisService } from '../../../services/jarwis.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import{UpdateusersComponent} from '../../updateusers/updateusers.component';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  httpData: any;

  constructor(public dialog: MatDialog,private http: HttpClient, private Jarwis: JarwisService) { }


  ngOnInit() {
    // this.getData();
    this.Jarwis.getusersList().subscribe((data: any) => {
      debugger;
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
    });


  }



}
