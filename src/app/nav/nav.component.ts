import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { take, takeWhile } from 'rxjs/operators';
import { User } from '../_models/user';
import { AccountService } from '../_services/account/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  myToken:string="";
  public isVendor:boolean=false;
  model:any={};
  user:User;

  constructor(public accountService: AccountService,private router:Router,
    private toastr:ToastrService) {

      this.myToken=this.accountService.getToken();
      if(this.myToken!=null) {
        this.user=this.accountService.getCurrentUser();
        //if(this.user==null)this.accountService.
        this.isVendor=this.user.isVendor;

      }else{
        this.redirectToLoginView();
      }
     }

  ngOnInit(): void {
    //console.log(this.router.url); //  /routename
  }

  redirectToLoginView()
  {
    this.router.navigateByUrl('/account/login');
  }

  login(){
    this.accountService.login(this.model).subscribe(response=> {

      this.router.navigateByUrl('/');

    });
  }

  signin(){
    this.router.navigateByUrl('/register');
  }

  logout(){
    this.accountService.logout();
    this.redirectToLoginView();
  }


}
