import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Services } from 'src/app/_models/services';
import { WebService } from 'src/app/_services/web.service';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {
  max = 5;
  rate = 3;
  isReadonly = true;
  serviceUrl:string;
  service: Services

  constructor(private router: Router,private webservice: WebService) { }

  ngOnInit(): void {
    this.serviceUrl=this.router.url.split("/")[2];
    console.log(this.router.url); //  /routename
    console.log(this.serviceUrl);
    this.getService();
  }

//   resolve(route: ActivatedRouteSnapshot):Observable<Member> {
//     return this.memberService.getMember(route.paramMap.get('username'));
// }

getService()
{
  this.webservice.getService(this.serviceUrl).subscribe(response=>{
    this.service=response.data;
    this.rate=this.service.avgRatings;
  })
}

}