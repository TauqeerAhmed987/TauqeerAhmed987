import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountService } from '../_services/account/account.service';
import { User } from '../_models/user';
import { take } from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private accountService: AccountService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // let currentUser:User={
    //   username: '',
    //   token: '',
    //   photoUrl:'',
    //   gender:'',
    //   firstName:'',
    //   lastName:''
    // };

let myToken:string=this.accountService.getToken();

if(myToken){
  request=request.clone({
    setHeaders:{
      Authorization : `Bearer ${myToken}`
    }
  })
}
    return next.handle(request);
  }
}
