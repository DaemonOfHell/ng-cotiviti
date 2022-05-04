import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Bid } from 'src/app/bid'; 
import { BidService } from 'src/app/services/bid.service';
import { UiToggleService } from 'src/app/services/ui-toggle.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  myBids: Bid[] = []
  
  myId!: string 
  myName!: string  
  myRoles!: string  

  showBidForm: boolean = false;  
  // sub!:Subscription

  constructor(
    // private bidService: BidService, private uiService: UiToggleService
    ) { 
    // this.sub = uiService.onToggle().subscribe(value => this.showBidForm = value)
  }
 

  ngOnInit(): void {
    // this.getHeroes();
    this.fillMyInfo()
  }

  // getHeroes(): void{
  //   this.heroService.getBids().subscribe(bids=>this.myBids= bids.slice(0,5))
  // }
  
    fetchStats():void{ 
    }

    fillMyInfo():void{ 
      const myInfo = JSON.parse(sessionStorage.getItem('userInfo')||'{}')
      this.myId = myInfo?.userId
      this.myName = myInfo?.username
      this.myRoles = myInfo?.roles.join(', ')
    }

    toggleShowBidCreateForm(){
      this.showBidForm = !this.showBidForm
      // this.uiService.toggleOverlay('') 
    }
}
 


