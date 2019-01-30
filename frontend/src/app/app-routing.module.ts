import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';
import { SuperadminmoduleModule } from './components/superadmin/superadminmodule.module';
import { UserModule } from './components/user/user.module';
import { AdminModule } from './components/admin/admin.module';

const appRoutes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'request-password-reset',
    component: RequestResetComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'response-password-reset',
    component: ResponseResetComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'superadmin',
    loadChildren: () => SuperadminmoduleModule,
    canActivate: [AfterLoginService]
  }
  ,
  {
    path: 'admin',
    loadChildren: () => AdminModule,
    canActivate: [AfterLoginService]
  },
  {
    path: 'user',
    loadChildren: () => UserModule,
    canActivate: [AfterLoginService]
  }
];

@NgModule({
  imports: [
    AdminModule,
    UserModule,
    SuperadminmoduleModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
