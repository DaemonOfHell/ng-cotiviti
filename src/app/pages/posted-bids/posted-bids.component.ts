import { Component, OnInit } from '@angular/core';
import { Bid } from 'src/app/bid';
import { BidService } from 'src/app/services/bid.service';
import { BidRequest } from 'src/bid-request';

@Component({
  selector: 'app-posted-bids',
  templateUrl: './posted-bids.component.html',
  styleUrls: ['./posted-bids.component.css']
})
export class PostedBidsComponent implements OnInit {
  private pid:Number = 123
  offers: Bid[] = []

  constructor(private bidService: BidService) { }

   ngOnInit(): void {
    this.fetchAllBids()
  }

  fetchAllBids():void{
    this.bidService.getBids().subscribe(bids=>this.offers=bids)
  }

}
