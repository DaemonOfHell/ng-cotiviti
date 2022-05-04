import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostBid } from 'src/app/mock_data/post-bid';
import { AllPostsService } from 'src/app/services/all-posts.service';
import { UiToggleService } from 'src/app/services/ui-toggle.service';
import { BidRequest } from 'src/bid-request';

@Component({
  selector: 'app-bid-form',
  templateUrl: './bid-form.component.html',
  styleUrls: ['./bid-form.component.css']
})
export class BidFormComponent implements OnInit {
  @Input() showSelf:boolean = false;
  @Input() posterId!:number
  @Input() productId!:number
  @Input() productName!:string
  bid_status:string = 'offer'
  isSettled?:boolean = false;

  offeredPrice!:number
   
  sub!:Subscription

  constructor(private uiService: UiToggleService, private allPostsService: AllPostsService) { 
      this.sub = uiService.onToggle().subscribe(value => this.showSelf = value)
  }

  ngOnInit(): void {
  }

  submitBid(){
    const newBidOffer:PostBid = {
      product_id: this.productId,
      bid_status: this.bid_status,
      isSettled:this.isSettled,
      userId:this.posterId,
      productName:this.productName,
      biddingRate: this.offeredPrice
 
  }

    // console.log(newBidOffer);
    // newBidOffer.productId=
    this.allPostsService.createNewPost(newBidOffer).subscribe(newPost=>console.log(newPost) )
    
  } 

  toggleSelf(){
    this.uiService.toggleOverlay('')
  }
}
