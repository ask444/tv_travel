import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { SuperhomeComponent } from './superhome/superhome.component';

const routes: Routes = [
  { path: 'profile', component: SuperhomeComponent },
  // { path: 'component2', component: Component2Component },
  // { path: 'component3', component: Component3Component },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfileComponent, SuperhomeComponent]
})
export class SuperadminmoduleModule { }
