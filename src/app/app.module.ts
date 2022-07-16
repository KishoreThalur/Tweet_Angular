import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { TweetsService } from './tweets.service';
import { TweetsComponent } from './tweets/tweets.component';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { UsersService } from './users.service';
// import { AlertModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    TweetsComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    UsersComponent
  ],
  imports: [
    // AlertModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [TweetsService,UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
