import { Component, OnInit } from '@angular/core';
import { VendorType } from '../_models/vendorvm';
import { VendorsService } from '../_services/vendors/vendors.service';

@Component({
  selector: 'app-vendor-types',
  templateUrl: './vendor-types.component.html',
  styleUrls: ['./vendor-types.component.css']
})
export class VendorTypesComponent implements OnInit {

  public vendorTypes:VendorType[];

  constructor(private vendorService : VendorsService) { }

  ngOnInit(): void {
    this.vendorService.getVendorTypes().subscribe(c=>this.vendorTypes=c);
  }


}
