import { Component, OnInit } from '@angular/core';
import { MyPostWithOffers } from 'src/app/mock_data/get-my-post';
import { BidApproval } from 'src/app/mock_data/bid-approval';
import { MyPostsService } from 'src/app/services/my-posts.service';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit {
  myPosts:MyPostWithOffers[] = []

  constructor(private myPostsService: MyPostsService) { }

  ngOnInit(): void {
    this.fetchMyPosts()
  }

  fetchMyPosts(){
    this.myPostsService.getMyPosts().subscribe(myPosts=>{
      this.myPosts=myPosts
      console.log(this.myPosts);
      
    })
  }

  acceptBid(requestedBid:any){
    const newbid:BidApproval={
      id: requestedBid.BIDID,
      bid_status: requestedBid.BID_STATUS,
      isSettled : !requestedBid.IS_SETTLED,
      userId : requestedBid.USER_ID,
      product_id : requestedBid.PRODUCT_ID,
      biddingRate : requestedBid.BIDDING_RATE,
    } 
    
    console.log(newbid);
    
  
    this.myPostsService.acceptAndUpdate(newbid).subscribe(acceptedBid=>{
       console.log("post is sold; ",acceptedBid);
       requestedBid.IS_SETTLED=true
    })
  } 
}
