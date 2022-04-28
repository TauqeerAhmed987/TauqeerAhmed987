import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Options2ListModel, Options2Model, UserProfile, UserProfileReponseModel, UserProfileUpdate } from '../_models/user';
import { AccountService } from '../_services/account/account.service';
import { RequestService } from '../_services/request/request.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  
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
    this.isEditing=true;
    this.customerProfileUpdateForm.enable();
  }

  cancel() {
    this.isEditing=false;
    this.customerProfileUpdateForm.disable();
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
    if(this.userProfile.servicesUsed.optionSelected !=undefined){
      this.selectedItems = this.userProfile.servicesUsed.optionSelected
    }

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
this.customerProfileUpdateForm.disable();
  });
}

submitAccountUpdate(){

  // 
   let userUpdate:UserProfileUpdate={ 
     firstName:'',
     lastName:'',
     hairTypeId:0, 
     allergies:'', 
     listOfServiceIds:'',
     salonFrequency:'',
     doWearMakeup:false};
   //userUpdate.servicesUsed=servicesUsed.toString();

   var servicesUsed :Options2ListModel[] =this.customerProfileUpdateForm.controls["servicesUsed"].value;
   let serviceList=servicesUsed.map(item=>{
    return item.id;
   }).toString();

//    for(let i=0; i<servicesUsed.length; i++){
//     console.log(servicesUsed[i].id); //use i instead of 0
// }


   userUpdate.firstName= this.customerProfileUpdateForm.controls["firstName"].value;
   userUpdate.lastName= this.customerProfileUpdateForm.controls["lastName"].value;
   userUpdate.hairTypeId= +this.customerProfileUpdateForm.controls["hairType"].value;
   userUpdate.allergies= this.customerProfileUpdateForm.controls["allergies"].value;
   userUpdate.listOfServiceIds= serviceList;
   userUpdate.salonFrequency= this.customerProfileUpdateForm.controls["salonFrequency"].value;
   userUpdate.doWearMakeup= this.customerProfileUpdateForm.controls["wearMakeup"].value ===0 ? false:true;
   
  this.accountService.updateProfile(userUpdate)
  .subscribe(response=> {

    this.toastr.show("Update successful");

  },error=> {

    this.validationErrors=error;

  });

}

}
