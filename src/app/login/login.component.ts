import { HttpErrorResponse } from '@angular/common/http';
import { templateSourceUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Tweet } from '../tweet';
import { TweetsService } from '../tweets.service';
import { users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user=new users();
  public tweets: Tweet[] = [];
  public userList: users[] = [];
  public curUser: users | undefined;
  public tweet:Tweet | undefined;
  public  tempUser: users | undefined ;
  // public cusService:UsersService ;
  userEmail:string='';
  userPassword:string='';


  title: any;

  constructor(private tweetService: TweetsService,private userService:UsersService,private router:Router){
    // this.cusService=userService;
  }

  ngOnInit(): void {
  }

  public regUser():void{
    
    this.router.navigate(['register']);
  }

  //Done
  public loginUser():void{


    console.log (this.user);
    this.userService.loginUser(this.user).subscribe(
      (response:users)=>{
          this.user=response;
          // this.cusService.setUsers(response);
          // environment.username=response.username;
          this.router.navigate(['tweets']);
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }
  //Done
  public forgotUser(name:string):void{
    this.userService.forgotUser(name).subscribe(
      (response:users)=>{
          this.curUser=response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }
}
