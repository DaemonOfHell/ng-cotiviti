import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiToggleService } from 'src/app/services/ui-toggle.service'; 
import { ButtonComponent } from '../../button/button.component';
import { Bid } from 'src/app/bid'; 
import { BidService } from 'src/app/services/bid.service';

@Component({
  selector: 'app-personal-bids',
  templateUrl: './personal-bids.component.html',
  styleUrls: ['./personal-bids.component.css']
})
export class PersonalBidsComponent implements OnInit {
  showMyBidsOverlay!: boolean;
  calledBy!:string
  sub!: Subscription
  @Input() myBids: Bid[] =[]
  @Input() title!:string

  // mybids: Bid[] = []

  constructor(
    private uiToggleService: UiToggleService 
    // private dbservice: BidService
  ) {
    this.sub = this.uiToggleService.onToggle().subscribe(value => this.showMyBidsOverlay=value) 
  }

  ngOnInit(): void {
    // this.fetchMyBids();
    // console.log(this.bids);
  }

  closeOverlay(){
    this.uiToggleService.toggleOverlay(null)
  }

  // fetchMyBids():void{
  //   this.dbservice.getBids().subscribe(bids=> this.bids = bids)
  // }

  toggleShowMyBidsForm(){
    this.showMyBidsOverlay = !this.showMyBidsOverlay
    this.uiToggleService.toggleOverlay('') 
  }
}
