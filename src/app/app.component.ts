import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from './_models/user';
import { AccountService } from './_services/account/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Glam';
  constructor(private accountService:AccountService,private router:Router){}

  isFullWidthPage:boolean=false;
  
  ngOnInit() {
    
    if (this.router.url.indexOf('login') > -1) {
    this.isFullWidthPage= false;
  }else{
    this.isFullWidthPage= true;
  }
    this.setCurrentUser();
  } 

  setCurrentUser(){

    const isUserAuthenticated: boolean =this.accountService.isUserAuthenticated(); 

    if(!isUserAuthenticated)
    {
      this.router.navigate["login"];
    }
    

  }

}
