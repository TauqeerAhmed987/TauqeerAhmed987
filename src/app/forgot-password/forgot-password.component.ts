import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  loginForm: FormGroup;
  validationErrors:string[]=[];
  
    constructor(public accountService: AccountService,private router:Router,
      private toastr:ToastrService,private fb:FormBuilder) { }
  
    ngOnInit(): void {
      this.intializeForm();
    }
  
    forgotPassword()
    {
      console.log('this.loginForm.value',this.loginForm.value)
      this.accountService.forgotPassword(this.loginForm.value).subscribe(response=> {
      console.log('response',response)

        this.router.navigateByUrl('/');
      });
    }
  
    intializeForm()
  {
    this.loginForm=this.fb.group({
      Email: ['',Validators.required]
    });
  
    // this.loginForm.controls.password.valueChanges.subscribe(()=>{
    //   this.loginForm.controls.password.updateValueAndValidity();
    // })
  }

}
