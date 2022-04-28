import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ToastrService } from 'ngx-toastr';
import { Options2ListModel, UserProfile } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account/account.service';

@Component({
  selector: 'app-vendor-account',
  templateUrl: './vendor-account.component.html',
  styleUrls: ['./vendor-account.component.css']
})
export class VendorAccountComponent implements OnInit {

  @Output() cancelRegister=new EventEmitter();
  customerProfileUpdateForm: FormGroup;
  validationErrors:string[]=[];
  public userProfile: UserProfile;
  public isEditing: boolean=false;
 
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings:IDropdownSettings = {};

  constructor(
    private toastr:ToastrService,
    private fb:FormBuilder,
    private accountService:AccountService,
    private router:Router) { }

  ngOnInit(): void {

    this.intializeForm();
    this.getUserProfile();
  }

  onItemSelect(items: Options2ListModel){
   // this.selected.push(items.id);
  }

  onItemDeSelect(items:Options2ListModel)
  {
    // var index = this.selected.indexOf(items.id);
    
    // if (index !== -1) {
    //   this.selected.splice(index, 1);
    // }
  }

  onSelectAll(items: any) {
    console.log(items);
  }

  edit() {
    this.isEditing===true;
  }

intializeForm()
{
  this.customerProfileUpdateForm=this.fb.group({
    firstName:['', Validators.required],
    lastName:['',Validators.required],
    servicesUsed:['',Validators.required],
    salonFrequency:['',Validators.required],
    wearMakeup:['',Validators.required],
    allergies:['',Validators.required],
    hairType:['',Validators.required]
  });
  
  
}

getUserProfile()
{
  this.accountService.getUserProfile().subscribe(response=>{
    
    this.userProfile=response;

    if(this.userProfile)
    {
      //this.accountService.getSalonOptions().subscribe(options => this.userProfile.salonFrequency=options);
      
      //console.log("salon frequency");
      //console.log(this.userProfile.salonFrequency);

      
    this.dropdownList = this.userProfile.servicesUsed.options;

    this.selectedItems = this.userProfile.servicesUsed.optionSelected

    this.dropdownSettings  = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: false
    };

     this.customerProfileUpdateForm.patchValue({
    firstName:this.userProfile.firstName, 
    lastName:this.userProfile.lastName,
    servicesUsed:this.userProfile.servicesUsed,
    salonFrequency:this.userProfile.salonFrequency,
    wearMakeup:this.userProfile.wearMakeup,
    allergies:this.userProfile.allergies,
    hairType:this.userProfile.hairType
  });
}
//this.customerProfileUpdateForm.disable();
  });
}

submitAccountUpdate(){

  var servicesUsed =this.customerProfileUpdateForm.controls["servicesUsed"].value
  this.accountService.updateProfile(this.customerProfileUpdateForm.value).subscribe(response=>{
    
    this.toastr.show("Update successful");
  },error=>{
    this.validationErrors=error;
  });
}

}
