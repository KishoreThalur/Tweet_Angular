import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Tweet } from './tweet';
import { TweetsService } from './tweets.service';
import { users } from './users';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}
)
export class AppComponent implements OnInit{
  
  globalUsername:string |undefined;
  user=new users();

  constructor(){}

  ngOnInit(){

  }

  
}
