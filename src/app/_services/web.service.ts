import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HomeResponseModel, HomeView } from '../_models/homeVM';
import { Page } from '../_models/page';
import { Services, ServicesResponseModel } from '../_models/services';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  //pageContent=this.getHomePage();
  baseUrl=environment.apiUrl;
  sliderImages:HomeView;

  constructor(private http:HttpClient) {}

  getHomePage(){

    return this.http.get<HomeResponseModel>(this.baseUrl + 'Home/HomeView').pipe(map(response=>{
      this.sliderImages=response.data;
      console.log(response);
      return response;
    }))
  }

  getSlides():Observable<any>{

    return this.http.get<any>(this.baseUrl + 'Home/HomeView').pipe();
   
  }

  getService(serviceId):Observable<ServicesResponseModel>{

    return this.http.get<ServicesResponseModel>(this.baseUrl + 'Services/Get?serviceId=' + serviceId).pipe();
   
  }

  validateVoucher(code)
{
  return this.http.get<string>(this.baseUrl + 'Discount/Validate?code=' + code).pipe();
}
 

submitRequest(model){

  return this.http.post(this.baseUrl + 'Customers/MakeRequest',model);
  
}
}
