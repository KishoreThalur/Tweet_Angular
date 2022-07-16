import { HttpErrorResponse } from '@angular/common/http';
import { Component,Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tweet } from '../tweet';
import { TweetsService } from '../tweets.service';
import { users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public tweets: Tweet[] = [];
  public userList: users[] = [];
  public user=new users();
  public tweet:Tweet | undefined;
public username:string |undefined;
  public firstname="";
  title: any;
 

  constructor(private tweetService: TweetsService,private userService:UsersService ,private router:Router){
    // this.userService=userService;
    // this.username=userService.username;
  }

  ngOnInit(): void {
    // this.user =this.userService.getUser();
    this.username ="kishorethalur";
    this.firstname ="Kishore Thalur";
    this.getUserTweets("kishorethalur");
    
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
public updateTweets(tweet:Tweet):void{
  this.tweetService.updateTweets(tweet).subscribe(
    (response:Tweet)=>{
        this.tweet=response;
    },
    (error:HttpErrorResponse)=>{
      alert(error.message);
    }
  );
}
//Done
public likeTweets(tweet:Tweet):void{
  this.tweetService.likeTweets(tweet).subscribe(
    (response:Tweet)=>{
        this.tweet=response;
        this.router.navigate(['profile']);
    },
    (error:HttpErrorResponse)=>{
      alert(error.message);
    }
  );
}
//Done
public deleteTweets(tweet:Tweet):void{
  this.tweetService.deleteTweets(tweet).subscribe(
    (response:Tweet)=>{
        this.tweet=response;
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
public getUserTweets(id:string):void{
  this.tweetService.getUserTweets(id).subscribe(
    (response:Tweet[])=>{
        this.tweets=response;
    },
    (error:HttpErrorResponse)=>{
      alert(error.message);
    }
  );
}

public goToTweets():void{
  this.router.navigate(['tweets']);
}

public goToUsers():void{
  this.router.navigate(['users']);
}
}
