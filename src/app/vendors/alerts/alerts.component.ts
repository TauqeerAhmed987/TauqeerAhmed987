import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AcceptRequestModel, Alerts, ServiceRequest } from 'src/app/_models/services';
import { VendorsService } from 'src/app/_services/vendors.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  alerts : Alerts[];
  oneHourReminder:boolean=true;

  constructor(private vendorService:VendorsService, private toast:ToastrService) { }

  ngOnInit(): void {
    this.vendorService.getAlerts().subscribe(response =>
      {
        this.alerts =response;
      }
    );
  }

  acceptRequest(id:string,oneHourReminder:boolean)
  {
    if(id) 
    {
      const model:AcceptRequestModel={requestId:id,oneHourReminder:oneHourReminder};
      this.vendorService.acceptRequest(model).subscribe(response =>
        {
          console.log('successfull');
        }
      );
    }else{
      this.toast.show('unable to accept request');
    }
  }

}
