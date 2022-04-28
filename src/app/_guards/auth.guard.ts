import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccountService } from '../_services/account/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private accountService: AccountService,
    private jwtHelper : JwtHelperService,
    private router: Router, 
    private toastr : ToastrService){}

  canActivate() {

    const token:string =localStorage.getItem("token");

    if(token && !this.jwtHelper.isTokenExpired(token))
    {
      return true;
    }
    this.router.navigate["login"];
    return false;
  }
  
}
