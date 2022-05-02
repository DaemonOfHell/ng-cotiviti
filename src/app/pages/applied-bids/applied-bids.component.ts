import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Bid } from 'src/app/bid';
import { BidService } from 'src/app/services/bid.service';
import { UiToggleService } from 'src/app/services/ui-toggle.service';

@Component({
  selector: 'app-applied-bids',
  templateUrl: './applied-bids.component.html',
  styleUrls: ['./applied-bids.component.css']
})
export class AppliedBidsComponent implements OnInit {
  appliedBids: Bid[] = []
  showBidForm: boolean = false; 
  // subject!: Subject<any>
  sub!:Subscription

  constructor(private bidService: BidService, private uiService: UiToggleService) { 
    this.sub = uiService.onToggle().subscribe(value => this.showBidForm = value)
  }


  ngOnInit(): void {
    this.fetchAppliedBids()
  }


  fetchAppliedBids():void{
      this.bidService.getBids().subscribe(bids=>this.appliedBids=bids)
    }

    toggleShowBidForm(){
      this.showBidForm = !this.showBidForm
      this.uiService.toggleOverlay('') 
    }
}  
 