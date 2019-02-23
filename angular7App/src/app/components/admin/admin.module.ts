import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { EventsComponent } from '../superadmin/events/events.component';
import { SharedModule } from '../../shared.module';
import { AdminusersComponent } from './adminusers/adminusers.component';
const routes: Routes = [
  {
    path: '', component: AdminhomeComponent,
    children: [
      { path: "", component: AdminusersComponent },
      { path: 'adminusers', component: AdminusersComponent }
    ]
    // { path: 'events', component: EventsComponent },
    // { path: '**', redirectTo: "/login" }
    // { path: 'component2', component: Component2Component },
    // { path: 'component3', component: Component3Component },
  },
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [AdminhomeComponent, AdminusersComponent]
})
export class AdminModule { }
