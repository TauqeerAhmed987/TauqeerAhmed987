import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm: FormGroup;
validationErrors:string[]=[];

  constructor(public accountService: AccountService,private router:Router,
    private toastr:ToastrService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.intializeForm();
  }

  login()
  {
    this.accountService.login(this.loginForm.value).subscribe(response=> {
      this.router.navigateByUrl('/');
    });
  }

  intializeForm()
{
  this.loginForm=this.fb.group({
    Email: ['',Validators.required],
    Password: ['',[Validators.required, Validators.minLength(4),Validators.maxLength(8)]]
  });

  // this.loginForm.controls.password.valueChanges.subscribe(()=>{
  //   this.loginForm.controls.password.updateValueAndValidity();
  // })
}
}
