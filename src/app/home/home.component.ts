import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WebService } from '../_services/web.service';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HomeView } from '../_models/homeVM';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { AccountService } from '../_services/account/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  itemsPerSlide = 3;
  slides:HomeView;
  max = 5;
  rate = 3;
  isReadonly = true;
  
  // = [
  //   {image: 'assets/images/nature/1.jpg'},
  //   {image: 'assets/images/nature/2.jpg'},
  //   {image: 'assets/images/nature/3.jpg'},
  //   {image: 'assets/images/nature/4.jpg'},
  //   {image: 'assets/images/nature/5.jpg'},
  //   {image: 'assets/images/nature/6.jpg'},
  //   {image: 'assets/images/nature/7.jpg'},
  //   {image: 'assets/images/nature/8.jpg'},
  //   {image: 'assets/images/nature/1.jpg'},
  //   {image: 'assets/images/nature/2.jpg'}
  // ];

  constructor(private webservice: WebService, private accountService: AccountService,private router: Router) { }

  

  ngOnInit(): any {
    if(this.accountService.isUserAuthenticated())
    {
      this.getHome();
    }else{
      this.router.navigateByUrl("/login")
    }
  }

  // registerToggle(){
  //   this.registerMode = !this.registerMode;
  // }

getHome()
{
 this.webservice.getHomePage().subscribe(response=>{
  this.slides=response.data;
})
}

  // getUsers(){

  //   this.http.get('https://localhost:44359/api/Users').subscribe(response =>{
  //     this.users=response;
  // },error =>{
  //     console.log(error);
  //     }
  //   )
    
  // }

  // cancelRegisterMode(event: boolean){
  //   this.registerMode=event;
  // }
}
