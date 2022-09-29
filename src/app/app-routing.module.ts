import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'signup', component: UserComponent, 
          children: [{path: '', component: SignUpComponent}]},
  {path: 'signin', component: UserComponent, 
          children: [{path: '', component: SignInComponent}]},
  {path: '', redirectTo: 'signin', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
