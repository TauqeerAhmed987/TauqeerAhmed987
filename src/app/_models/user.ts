export interface User{
    username:string;
    token:string;
    firstName:string;
    lastName:string;
    photoUrl:string;
    isVendor:boolean;
}

export interface UserReponseModel{
    data:User;
    error:string;
    statusCode:number;
}

export interface UserProfile{
    username:string;
    token:string;
    firstName:string;
    lastName:string;
    images:Image[];
    url:string;
    allergies:string;
    salonFrequency:OptionsModel;
    hairType:OptionsListModel;
    servicesUsed:Options2Model;
    wearMakeup:boolean;
}

export interface UserProfileReponseModel{
    data:UserProfile;
    error:string;
    statusCode:string;
}

export interface  OptionsReponseModel{
    data:OptionsListModel[];
    error:string;
    statusCode:string;
}

export interface Image{
    url:string;
    isMain:string;
}
export interface OptionsListModel{
    id:string;
    value:string;
}

export interface Options2ListModel{
    id:string;
    name:string;
}

export interface OptionsModel{
    options:OptionsListModel[];
    optionSelected:OptionsListModel[];
}

export interface Options2Model{
    options:Options2ListModel[];
    optionSelected:Options2ListModel[];
}

export interface UserProfileUpdate{
    firstName:string;
    lastName:string;
    allergies:string;
    salonFrequency:string;
    hairTypeId:number;
    listOfServiceIds:string;
    doWearMakeup:boolean;
}

