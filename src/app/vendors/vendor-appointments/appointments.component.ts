import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Appointments } from 'src/app/_models/services';
import { VendorsService } from 'src/app/_services/vendors.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class VendorAppointmentsComponent implements OnInit {
  modalRef?: BsModalRef;
  appointmentList:Appointments[];
  constructor(private vendorService:VendorsService,private modalService: BsModalService) { }

  ngOnInit(): void {
    this.vendorService.getAppointments().subscribe(
      response =>this.appointmentList=response)
  }

  openAppointment(apptId:string){
    
  }

  startAppointment(apptId:string){
    
  }
  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  OnTheWay(apptId:string){
    
  }

  CompleteAppointment(apptId:string){
    
  }

  CancelAppointment(apptId:string){
    
  }

  HaveArrived(apptId:string){
    
  }

}
