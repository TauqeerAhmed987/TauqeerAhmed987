import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AcceptRequestModel, AlertListResponseModel, Alerts, AppointmentListResponseModel, Appointments, ServiceRequest } from '../_models/services';

@Injectable({
  providedIn: 'root'
})
export class VendorsService {

  baseUrl=environment.apiUrl;
  constructor(private http:HttpClient) { }

  getAlerts():Observable<Alerts[]>{
    return this.http.get(this.baseUrl + 'Vendors/GetAlerts').pipe(
      map((response: AlertListResponseModel) => {
          return response.data.sort((a, b) => new Date(b.day).getTime() - new Date(a.day).getTime());
      })
    );
  }

  getAppointments():Observable<Appointments[]>{
    return this.http.get(this.baseUrl + 'Vendors/GetAppointments').pipe(
      map((response: AppointmentListResponseModel) => {

        if(response.data !=null){
          return response.data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        }
        return null;
          
      })
    );
  }

  acceptRequest(request:AcceptRequestModel){
    return this.http.post(this.baseUrl + 'Vendors/AcceptRequest',request).pipe(
      map((response: any) => {
          //return response.data;
      })
    );
  }
}
