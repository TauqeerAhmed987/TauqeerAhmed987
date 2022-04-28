import { ServiceCategory, Services } from "./services";
import { VendorType } from "./vendorvm";

export interface HomeView{
    serviceCategories:ServiceCategory[];
    featuredServices:Services[];
    featuredVendorTypes:VendorType[];
}

export interface HomeResponseModel{
    data:HomeView;
    error:string;
    statusCode:number;
}
