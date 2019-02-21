import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
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
    "view": "Superadmin", "value": "SUPERADMIN"
  },
  {
    "view": "Admin", "value": "ADMIN"
  },
  {
    "view": "User", "value": "USER"
  }
  ]

  constructor(private fb: FormBuilder,
    private Jarwis: JarwisService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    debugger;
    this.usersData = data;
  }


  ngOnInit() {

    this.myForm = this.fb.group({
      role: this.usersData.name,
      name: ["", Validators.required],
      email: this.usersData.email,
      message: ''
    });
  }
  onSubmit(formval) {
    console.log("MY FORM:", formval);
    var sendData = {
      role_id: this.usersData.role_id,
      role: formval.role,
    }
    this.Jarwis.updateUser(sendData).subscribe((data: any) => {
      debugger;
    })


  }


}
