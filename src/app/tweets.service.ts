import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tweet } from './tweet';
import { environment } from 'src/environments/environment';
import { users } from './users';
import { UsersComponent } from './users/users.component';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {

   user=new users();
  private apiServerUrl=environment.apiBaseUrl;
  constructor(private http:HttpClient) { }

   public getAllTweets() :Observable<Tweet[]>{
return this.http.get<Tweet[]>(this.apiServerUrl+'/all');
   }
   public getUserHalfTweets(username:string) :Observable<Tweet[]>{
    return this.http.get<Tweet[]>(this.apiServerUrl+'/user/search/'+username);
       }
       public getUserTweets(id:string) :Observable<Tweet[]>{
        return this.http.get<Tweet[]>(this.apiServerUrl+'/'+id);
           }

   public addTweets(tweet:Tweet) :Observable<Tweet>{
    return this.http.post<Tweet>(this.apiServerUrl+'/'+tweet.username+'/add',tweet);
       }
       public replyToTweets(tweet:Tweet) :Observable<Tweet>{
        return this.http.post<Tweet>(this.apiServerUrl+'/'+tweet.username+'/reply/'+tweet.id,tweet);
           }
           public updateTweets(tweet:Tweet) :Observable<Tweet>{
            return this.http.put<Tweet>(this.apiServerUrl+'/'+tweet.username+'/update/'+tweet.id,tweet);
               }
               public likeTweets(tweet:Tweet) :Observable<Tweet>{
                return this.http.put<Tweet>(this.apiServerUrl+'/'+tweet.username+'/like/'+tweet.id,tweet);
                   }
                   public deleteTweets(tweet:Tweet) {
                    return this.http.delete<Tweet>(this.apiServerUrl+'/'+tweet.username+'/delete/'+tweet.id);
                       }

  }