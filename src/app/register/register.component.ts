import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tweet } from '../tweet';
import { TweetsService } from '../tweets.service';
import { users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user=new users();
  public tweets: Tweet[] = [];
  public userList: users[] = [];
  public tweet:Tweet | undefined;

  title: any;

  constructor(private tweetService: TweetsService,private userService:UsersService,private router:Router){}

  ngOnInit(): void {
  }

  //Done
  public registerUser():void{
    this.userService.registerUser(this.user).subscribe(
      (response:users)=>{
          this.user=response;
          this.router.navigate(['profile']);
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }
}
