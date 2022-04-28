import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VendorType } from 'src/app/_models/vendorvm';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VendorsService {

  baseUrl=environment.apiUrl;
  constructor(private http:HttpClient) {

   }
   

  getVendorTypes():Observable<VendorType[]>{

    return this.http.get(this.baseUrl + 'Vendors/GetTypes').pipe(
      map((vendorTypes: VendorType[]) => {

        if(vendorTypes){
          return vendorTypes;
        }
        return null;
      },() =>{
        
      })
    );
}
}
