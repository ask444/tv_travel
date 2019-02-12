import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FlatpickrModule } from 'angularx-flatpickr';
import 'flatpickr/dist/flatpickr.css';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddeditEventComponent } from './addedit-event/addedit-event.component';
@NgModule({
  declarations: [NavbarComponent,AddeditEventComponent ],
  imports: [
    CommonModule,
    FlatpickrModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    // ...
    NavbarComponent,
    AddeditEventComponent ,
    FlatpickrModule
  ]
})
export class SharedModule { }
