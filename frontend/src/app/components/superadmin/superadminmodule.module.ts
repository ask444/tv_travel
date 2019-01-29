import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  // { path: 'component2', component: Component2Component },
  // { path: 'component3', component: Component3Component },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfileComponent]
})
export class SuperadminmoduleModule { }
