import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { TweetsComponent } from './tweets/tweets.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'profile', component: ProfileComponent,
children:[
  { path: 'users', component:UsersComponent },
  { path: 'tweets', component: TweetsComponent }
] },
  { path: 'tweets', component: TweetsComponent },
  { path: 'users', component:UsersComponent ,children:[
    { path: 'users', component:ProfileComponent }
  ] },
  { path: 'register', component: RegisterComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
