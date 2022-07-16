import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tweet } from '../tweet';
import { TweetsService } from '../tweets.service';
import { users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {

  public tweets: Tweet[] = [];
  public userList: users[] = [];
  user=new users();
  public tweet:Tweet | undefined;

  title: any;

  constructor(private tweetService: TweetsService,private userService:UsersService,private router:Router){}

  ngOnInit(){
    this.getAllTweets();
  }

  public getUserHalfTweets(val:string):void{
    this.tweetService.getUserHalfTweets(val).subscribe(
      (response:Tweet[])=>{
          this.tweets=response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }
  public getUserTweets(user:string):void{
    this.tweetService.getUserTweets(user).subscribe(
      (response:Tweet[])=>{
          this.tweets=response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }
  //Done
  public replyToTweets(tweet:Tweet):void{
    this.tweetService.replyToTweets(tweet).subscribe(
      (response:Tweet)=>{
          this.tweet=response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }
  //Done
  public addTweets(tweet:Tweet):void{
    this.tweetService.addTweets(tweet).subscribe(
      (response:Tweet)=>{
          this.tweet=response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }
  
  //Done
 public getUser():void{
  this.userService.getUsers().subscribe(
    (response:users[])=>{
        this.userList=response;
    },
    (error:HttpErrorResponse)=>{
      alert(error.message);
    }
  );
}
   
  //Done
  public getAllTweets():void{
    this.tweetService.getAllTweets().subscribe(
      (response:Tweet[])=>{
          this.tweets=response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }
  public goToProfile():void{
    this.router.navigate(['profile']);
  }

  public goToUsers():void{
    this.router.navigate(['users']);
  }

}
