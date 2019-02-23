import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,MatSnackBarModule,MatFormFieldModule,MatInputModule, MatDialogModule,MatSelectModule, MatCheckboxModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [MatButtonModule,MatSnackBarModule, MatDialogModule,
    MatFormFieldModule,MatInputModule,
    MatSelectModule, MatCheckboxModule],
  exports: [MatButtonModule,MatSnackBarModule, MatDialogModule,
    MatFormFieldModule,MatInputModule,
    MatSelectModule, MatCheckboxModule]
})
export class MaterialModule { }
