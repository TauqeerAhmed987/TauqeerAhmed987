import { Photo } from "./photo";

export interface Member{
    userName:string;
    firstName:string;
    lastName:string;
    photoUrl:string;
    created:string;
    age:string;
    lastActive:string;
    images:Photo[];
}