import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User, UserReponseModel } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl=environment.apiUrl;
  private currentUserSource=new ReplaySubject<string>(1);
  currentUser$=this.currentUserSource.asObservable();
  hidNav=false;
  isLoggedIn:boolean=false;


  constructor(private http:HttpClient) { }

  login(model:any){

    return this.http.post<UserReponseModel>(this.baseUrl + 'Account/login',model).pipe(
      map((user: UserReponseModel) => {
        //if(user){
          this.setCurrentUser(user.data.token);
        //}
      },error =>{
        this.isLoggedIn=false;
      })
    );
  }

  forgotPassword(model:any){

    return this.http.post<UserReponseModel>(this.baseUrl + 'Account/login',model).pipe(
      map((user: UserReponseModel) => {
        //if(user){
          this.setCurrentUser(user.data.token);
        //}
      },error =>{
        this.isLoggedIn=false;
      })
    );
  }


  resetPassword(model:any){

    return this.http.post<UserReponseModel>(this.baseUrl + 'Account/login',model).pipe(
      map((user: UserReponseModel) => {
        //if(user){
          this.setCurrentUser(user.data.token);
        //}
      },error =>{
        this.isLoggedIn=false;
      })
    );
  }

  setCurrentUser(token:string){

    //if(token){
      localStorage.setItem('user',token);
      this.currentUserSource.next(token);
      this.isLoggedIn=true;
   // }

  }

  logout(){

    localStorage.removeItem('user');
    this.currentUserSource.next("");

  }

  register(model:any){
    return this.http.post<User>(this.baseUrl + 'account/register',model).pipe(
      map((user:User) => {
        if(user){
          this.setCurrentUser(user.token);
        }
      },error =>{
        this.isLoggedIn=false;
      })
    )
  }

}
