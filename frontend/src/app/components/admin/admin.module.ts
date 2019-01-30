import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';


const routes: Routes = [
  { path: 'profile', component: AdminhomeComponent },
  // { path: 'component2', component: Component2Component },
  // { path: 'component3', component: Component3Component },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminhomeComponent]
})
export class AdminModule { }
