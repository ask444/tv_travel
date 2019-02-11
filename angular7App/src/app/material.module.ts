import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatDialogModule, MatCheckboxModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [MatButtonModule, MatDialogModule, MatCheckboxModule],
  exports: [MatButtonModule, MatDialogModule, MatCheckboxModule]
})
export class MaterialModule { }
