import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Services } from 'src/app/_models/services';
import { RequestService } from 'src/app/_services/request/request.service';
import { WebService } from 'src/app/_services/web.service';

@Component({
  selector: 'app-service-request',
  templateUrl: './service-request.component.html',
  styleUrls: ['./service-request.component.css']
})
export class ServiceRequestComponent implements OnInit {
  requestForm: FormGroup;
  validationErrors:string[]=[];
  serviceUrl:string;
  discountAmt=0;
  service: Services
  searchValue:string;
  serviceCharge=0;
  totalFee=0;
  serviceCost=0;
  allowArrowKeys = true;
  myTime = new Date();
  
  constructor(private requestService: RequestService, 
    private toastr:ToastrService,private fb:FormBuilder,private router:Router,private webservice: WebService) { }

  ngOnInit(): void {
    
    this.serviceUrl=this.router.url.split("/")[2];
    this.getService();
  }

  intializeForm()
  {
    this.requestForm=this.fb.group({
      serviceId :[this.service.id,Validators.required],
      serviceCharge :[this.serviceCharge.toFixed(2).toString(),Validators.required],
      streetAddress:['',Validators.required],
      city:['',Validators.required],
      zip:['',Validators.required],
      time:['',Validators.required],
      day:['',Validators.required],
      phone:['',Validators.required],
      serviceCost:[this.service.price.toString(),Validators.required],
      totalDue:[this.totalFee.toFixed(2).toString(),Validators.required],
      discountCode:'',
    })
  
  }



getService()
{
  this.webservice.getService(this.serviceUrl).subscribe(response=>{
    this.service=response.data;
    this.serviceCost=this.service.price;
    this.serviceCharge=this.calculateServiceFee(this.service.price,0);
    this.totalFee=this.calculateTotalDue(this.serviceCharge.toString(),"0",this.service.price.toString());
    console.log("total this.serviceCharge: " + this.serviceCharge);
    console.log("total Due : "+this.totalFee);
    this.intializeForm();
  })
}

validateVoucher(event:any){

  this.webservice.validateVoucher(event.target.value).subscribe(response=>{
    this.router.navigateByUrl('/');
    //this.cancel();
  },error=>{
    this.validationErrors=error;
  })
  
}

calculateServiceFee(price:number,discount:number)
{
  let subTotal= (price - discount);

  return (subTotal*.03) + .30
}

calculateTotalDue(serviceFee: string,discount:string,price:string)
{
  console.log("serviceFee : "+ serviceFee)
  console.log("discount : "+ discount)
  console.log("price : "+ price)
  var total= parseFloat(serviceFee)  + parseFloat(discount) + parseFloat(price);
  console.log("toatl : " +total);
  return total;
}

submitRequest(){

  console.log('value form',this.requestForm.value)

  this.webservice.submitRequest(this.requestForm.value).subscribe(response=>{
    this.router.navigateByUrl('/request-list');
    //this.cancel();
  },error=>{
    this.validationErrors=error;
  })
  
}

}
