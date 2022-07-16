import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tweet } from './tweet';
import { environment } from 'src/environments/environment';
import { users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiServerUrl=environment.apiBaseUrl;

  public username:string="";
  constructor(private http:HttpClient) { }
    Users=new users();
    public setUsers(user:users):void{
       this.Users=user;
      //  this.username=this.Users.username;
    }
    public getUser():users{
      return this.Users;
    }
   public getUsers() :Observable<users[]>{
return this.http.get<users[]>(this.apiServerUrl+'/users/all');
   }

   public loginUser(user:users) :Observable<users>{
    return this.http.post<users>(this.apiServerUrl+'/login',user);
       }

       public forgotUser(username:string) :Observable<users>{
        return this.http.get<users>(this.apiServerUrl+username+'/forgot');
           }

   public registerUser(user:users) :Observable<users>{
    return this.http.post<users>(this.apiServerUrl+'/register',user);
       }
  }