import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RequestListResponseModel, ServiceRequest } from 'src/app/_models/services';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  baseUrl=environment.apiUrl;
  constructor(private http:HttpClient) { }


  getAllUserRequest():Observable<ServiceRequest[]>{
    return this.http.get(this.baseUrl + 'customers/AllRequest').pipe(
      map((response: RequestListResponseModel) => {
          return response.data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      })
    );
}

}
