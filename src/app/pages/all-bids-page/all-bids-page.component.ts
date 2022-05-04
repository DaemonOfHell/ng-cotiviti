import { Component, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { Bid } from 'src/app/bid';
import { BidService } from 'src/app/services/bid.service';
import { UiToggleService } from 'src/app/services/ui-toggle.service';

@Component({
  selector: 'app-all-bids-page',
  templateUrl: './all-bids-page.component.html',
  styleUrls: ['./all-bids-page.component.css']
})
export class AllBidsPageComponent implements OnInit {
  allBids: Bid[] = []
  showBidForm: boolean = false;  
  sub!:Subscription

  constructor(private bidService: BidService, private uiService: UiToggleService) { 
    this.sub = uiService.onToggle().subscribe(value => this.showBidForm = value)
  }

  ngOnInit(): void {
    this.fetchAllBids()
  }

  fetchAllBids():void{
    this.bidService.getBids().subscribe(bids=>this.allBids=bids)
  }

  makeBid():void{

  }

  toggleShowBidForm(){
    this.showBidForm = !this.showBidForm
    this.uiService.toggleOverlay('') 
  }

}
