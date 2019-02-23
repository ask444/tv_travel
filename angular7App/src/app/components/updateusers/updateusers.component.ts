import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JarwisService } from '../../services/jarwis.service';

@Component({
  selector: 'app-updateusers',
  templateUrl: './updateusers.component.html',
  styleUrls: ['./updateusers.component.css']
})
export class UpdateusersComponent implements OnInit {
  usersData: any;
  myForm: FormGroup;
  roles: any = [{
    "view": "Superadmin", "value": 1
  },
  {
    "view": "Admin", "value": 2
  },
  {
    "view": "User", "value": 3
  }
  ]

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<UpdateusersComponent>,
    private Jarwis: JarwisService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    debugger;
    this.usersData = data;
  }


  ngOnInit() {

    this.myForm = this.fb.group({
      role: this.usersData.role_id,
      name: '',
      email: this.usersData.email,
      message: ''
    });
  }
  onSubmit(formval) {
    console.log("MY FORM:", formval);
    var sendData = {
      user_id: this.usersData.user_id,
      role: formval.role,
    }
    this.Jarwis.updateUser(sendData).subscribe((data: any) => {
      debugger;
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
