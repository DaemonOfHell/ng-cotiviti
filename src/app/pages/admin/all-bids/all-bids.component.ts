import { Component, OnInit } from '@angular/core';
import { Bid } from 'src/app/bid';
import { BidService } from 'src/app/services/bid.service'; 

@Component({
  selector: 'app-all-bids',
  templateUrl: './all-bids.component.html',
  styleUrls: ['./all-bids.component.css']
})
export class AllBidsComponent implements OnInit {
  allBids: any = []

  constructor(private bidService: BidService) { }

  ngOnInit(): void {
    this.fetchAllBids()
  }

  fetchAllBids():void{
    this.bidService.getBids().subscribe(bids=>{
      this.allBids=bids
      console.log(this.allBids); 
    })
  }

  removeBid(bid:Bid){
    this.bidService.deleteBid(bid.id).subscribe(
      ()=>this.fetchAllBids()
    )
  }
}
