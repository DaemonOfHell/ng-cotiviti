import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiToggleService } from 'src/app/services/ui-toggle.service';
import { BidRequest } from 'src/bid-request';

@Component({
  selector: 'app-bid-form',
  templateUrl: './bid-form.component.html',
  styleUrls: ['./bid-form.component.css']
})
export class BidFormComponent implements OnInit {
  @Input() showSelf:boolean = false;
  pid!:number
  uid!:number
  offered_price!:number

  sub!:Subscription

  constructor(private uiService: UiToggleService) { 
      this.sub = uiService.onToggle().subscribe(value => this.showSelf = value)
  }

  ngOnInit(): void {
  }

  submitBid(){
    const newBidOffer:BidRequest = {
    pid: this.pid,
    uid: this.uid,
    offered_price: this.offered_price
  }

    console.log(newBidOffer);
    
  } 

  toggleSelf(){
    this.uiService.toggleOverlay('')
  }
}
