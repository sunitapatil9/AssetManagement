import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
//import { HomePageComponent } from './home-page/home-page.component'; ./reset-password.component.html'
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AuthGuard } from './auth.guard';
import { IndexPageComponent } from './index-page/index-page.component';

const routes: Routes = [
  {path: 'login' , component: LoginComponent},
  {path:'forgotpassword' , component :ForgotpasswordComponent },
  {path:'home-page' , canActivate : [AuthGuard],component : IndexPageComponent},
  {path:'', redirectTo: '/login', pathMatch:'full'},
  {
    path: 'reset-password/:adminUniq',
    component: ResetPasswordComponent,
    data: { title: 'reset-password page : ' }
  },
  {path:'**' , component : LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
