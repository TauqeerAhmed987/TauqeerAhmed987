import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, ReplaySubject } from 'rxjs';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User, UserProfile, UserProfileReponseModel, UserProfileUpdate, UserReponseModel } from '../../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl=environment.apiUrl;
  private currentUserSource=new ReplaySubject<User>(1);
  private tokenSource=new ReplaySubject<string>(1);
  currentUser$=this.currentUserSource.asObservable();
  token$=this.tokenSource.asObservable();
  hidNav=false;
  isLoggedIn:boolean=false;

  constructor(private http:HttpClient, private jwtHelper: JwtHelperService) { }

  login(model:any){

    return this.http.post<UserReponseModel>(this.baseUrl + 'Account/login',model).pipe(
      map((user: UserReponseModel) => {
        if(user.statusCode ===200 && user.data !=null){
          this.setCurrentUser(user.data);
          this.setToken(user.data.token);
        }
      },error =>{
        this.isLoggedIn=false;
      })
    );
  }

  setToken(token: string) {

    if(token){
      localStorage.setItem('token',token);
      this.tokenSource.next(token);
    }

  }

  getToken():string {
      return localStorage.getItem('token');
  }

  setCurrentUser(user:User) {

    if(user){
      localStorage.setItem('user',JSON.stringify(user));
      this.isLoggedIn=true;
      this.currentUserSource.next(user);
    }

  }  

  isUserAuthenticated()
  {
    const token:string = localStorage.getItem("token");

    if(token && !this.jwtHelper.isTokenExpired(token))
    {
      return true;
    }else{
      return false;
    }
  }

  getCurrentUser():User {

    return JSON.parse(localStorage.getItem('user'));

  }  

  getUserProfile():Observable<UserProfile>{

      return this.http.get(this.baseUrl + 'users/GetProfile').pipe(
        map((user: UserProfileReponseModel) => {

          if(user){

            localStorage.setItem('userProfile',JSON.stringify(user.data));
            //user.data.salonFrequency=this.getSalonOptions();

            return user.data;
          }
          return null;
        },() =>{
          
        })
      );
  }

  // getSalonOptions():Observable<OptionsListModel[]> {

  //     return this.http.get(this.baseUrl + 'users/GetSalonFrequency').pipe(
  //       map((optionsData: OptionsReponseModel) => {
  //        // if(user){

  //        return optionsData.data;
  //        // }
  //       //  return null;
  //       })
  //     );
  // }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
    this.tokenSource.next(null);
  }

  register(model:any){
    return this.http.post<User>(this.baseUrl + 'account/register',model).pipe(
      map((user:User) => {


        if(user){
          this.setCurrentUser(user);
          this.setToken(user.token);
        }
      },error =>{
        this.isLoggedIn=false;
      })
    )
  }

  updateProfile(model:UserProfileUpdate){
    return this.http.put<UserProfileUpdate>(this.baseUrl + 'Users',model).pipe(
      map((user:UserProfileUpdate) => {

        if(user){
         
        }
        
      },error =>{
        this.isLoggedIn=false;
      })
    )
  }

}
