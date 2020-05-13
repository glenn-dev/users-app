import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import all the components for which navigation service has to be activated 
import { SignInComponent } from '../components/auth/sign-in/sign-in.component';
import { SignUpComponent } from '../components/auth/sign-up/sign-up.component';
import { UsersComponent } from '../components/users/users.component';
import { ForgotPasswordComponent } from '../components/auth/forgot-password/forgot-password.component';
import { AuthGuard } from "../guards/auth.guard";
import { VerifyEmailComponent } from '../components/auth/verify-email/verify-email.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }