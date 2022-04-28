import { Component, OnInit } from '@angular/core';
import { ServiceRequest } from 'src/app/_models/services';
import { RequestService } from 'src/app/_services/request/request.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  myRequestList:ServiceRequest[];

  constructor(private requestService:RequestService) { }

  ngOnInit(): void {
this.requestService.getAllUserRequest().subscribe(response =>this.myRequestList=response)
  }

}
