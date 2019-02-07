import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { SuperhomeComponent } from './superhome/superhome.component';
// import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';


const routes: Routes = [
  { path: 'profile', component: SuperhomeComponent },
  // { path: 'component2', component: Component2Component },
  // { path: 'component3', component: Component3Component },
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
    ,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfileComponent, SuperhomeComponent]
})
export class SuperadminmoduleModule { }
