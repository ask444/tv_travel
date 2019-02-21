import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,MatFormFieldModule,MatInputModule, MatDialogModule,MatSelectModule, MatCheckboxModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [MatButtonModule, MatDialogModule,
    MatFormFieldModule,MatInputModule,
    MatSelectModule, MatCheckboxModule],
  exports: [MatButtonModule, MatDialogModule,
    MatFormFieldModule,MatInputModule,
    MatSelectModule, MatCheckboxModule]
})
export class MaterialModule { }
