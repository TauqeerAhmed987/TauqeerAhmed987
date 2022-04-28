import { Component, OnInit, ViewChild } from '@angular/core';
import { TabDirective, TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-request-history',
  templateUrl: './request-history.component.html',
  styleUrls: ['./request-history.component.css']
})
export class RequestHistoryComponent implements OnInit {
  @ViewChild('memberTabs',{static:true}) memberTabs:TabsetComponent;
//member:Member;
activeTab:TabDirective;
  
  constructor() { }

  ngOnInit(): void {
  }

  id:any="home";
  tabChange(ids:any){

    console.log(ids);
  }

  selectTab(tabId:number){
    this.memberTabs.tabs[tabId].active=true;
  }
  
    onTabActivated(data:TabDirective)
    {
      this.activeTab=data;
  
      // if(this.activeTab.heading==='Messages' && this.messages.length===0)
      // {
      //   this.loadMessages();
      // }
    }
}
