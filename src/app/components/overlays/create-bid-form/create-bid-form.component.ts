import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BidPost } from 'src/app/bid-post';
import { UiToggleService } from 'src/app/services/ui-toggle.service'; 

@Component({
  selector: 'app-create-bid-form',
  templateUrl: './create-bid-form.component.html',
  styleUrls: ['./create-bid-form.component.css']
})
export class CreateBidFormComponent implements OnInit {
  
  @Input() showSelf:boolean = false;
  item_title!:string
  item_desc!:string
  starting_price!:number 

  sub!:Subscription

  constructor(private uiService: UiToggleService) { 
      this.sub = uiService.onToggle().subscribe(value => this.showSelf = value)
  }

  ngOnInit(): void {
  }

  submitPost(){
    const newBidOffer:BidPost = {
        uid : JSON.parse(sessionStorage.getItem('userInfo')||'{}')?.userId,
        product_name: this.item_title,
        product_description: this.item_desc,
        biddingRate: this.starting_price  
    }   
  }
  
  toggleSelf(){
    this.uiService.toggleOverlay('')
  } 

}
