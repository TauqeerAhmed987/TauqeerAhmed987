import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //@Input() usersFromHomeComponent:any;
  @Output() cancelRegister=new EventEmitter();
  registerForm: FormGroup;
  maxDate: Date;
  validationErrors:string[]=[];

  constructor(private accountService: AccountService, 
    private toastr:ToastrService,private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.intializeForm();
    this.maxDate=new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear()-18);
    
  }

intializeForm()
{
  this.registerForm=this.fb.group({
    email: ['',Validators.required],
    password: ['',[Validators.required, Validators.minLength(4),Validators.maxLength(8)]],
    confirmPassword: ['',[Validators.required,this.matchValues('password')]],
    firstName:['',Validators.required],
    lastName:['',Validators.required],
     dob:[''],
    agreeToTerms:['',Validators.required]
  })

  this.registerForm.controls.password.valueChanges.subscribe(()=>{
    this.registerForm.controls.confirmPassword.updateValueAndValidity();
  })
}

matchValues(matchTo: string): ValidatorFn {

  return (control: AbstractControl) => {
    const controls = control?.parent?.controls as { [key: string]: AbstractControl; };
    let matchToControl = null;    
    if(controls) matchToControl = controls[matchTo];       
    return control?.value === matchToControl?.value
      ? null : { isMatching: true };
  }

}

  register(){

    this.accountService.register(this.registerForm.value).subscribe(response=>{
      this.router.navigateByUrl('/');
      this.cancel();
    },error=>{
      this.validationErrors=error;
    })
    
  }

cancel(){
  this.cancelRegister.emit(false);
}

}
