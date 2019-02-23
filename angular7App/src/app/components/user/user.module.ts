import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserhomeComponent } from './userhome/userhome.component';



const routes: Routes = [
  { path: '', component: UserhomeComponent },
  // { path: 'component2', component: Component2Component },
  // { path: 'component3', component: Component3Component },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserhomeComponent]
})
export class UserModule { }
