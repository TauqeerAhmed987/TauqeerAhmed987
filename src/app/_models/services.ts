export interface Services{
    ratingsCount:string;
    buttonText:string;
    avgRatings:number;
    totalBookings:number;
    name:string;
    price:number;
    duration:string;
    id:string;
    categoryName:string;
    imgUrl:string;
    description:string;
    buttonLink:string;
}

export interface ServiceRequest{
    serviceCost:string;
    isCancelled:string;
    date:Date;
    time:string;
    serviceName:string;
    stylistId:string;
    isAppointment:boolean;
    id:string;
    isAccepted:boolean;
    isComplete:boolean;
    isRescheduled:boolean;
    timeAccepted:string;
}

export interface Appointments{
    serviceCost:string;
    isCancelled:string;
    date:Date;
    time:string;
    serviceName:string;
    stylistId:string;
    isAppointment:boolean;
    id:string;
    isAccepted:boolean;
    isComplete:boolean;
    isRescheduled:boolean;
    timeAccepted:string;
}

export interface AppointmentListResponseModel{
    data:Appointments[];
    error:string;
    statusCode:number;
}

export interface RequestListResponseModel{
    data:ServiceRequest[];
    error:string;
    statusCode:number;
}
export interface Alerts{
    serviceCost:string;
    day:Date;
    time:string;
    zip:string;
    serviceName:string;
    firstName:string;
    id:string;
    oneHourReminder:boolean;
}
export interface AcceptRequestModel{
    requestId:string;
    oneHourReminder:boolean;
}

export interface AlertListResponseModel{
    data:Alerts[];
    error:string;
    statusCode:number;
}

export interface ServicesResponseModel{
    data:Services;
    error:string;
    statusCode:number;
}

export interface ServiceCategory{
    buttonLink:string;
    name:string;
    imgUrl:string;
}