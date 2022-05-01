import { Component, Input, OnInit } from '@angular/core';
import { Bid } from 'src/app/bid';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'; 

import { BidService } from '../../services/bid.service'; 
 
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() bid?: Bid
  constructor(
    private route: ActivatedRoute,
    private bidService: BidService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.fetchBid()
  }

  fetchBid(): void {
    const pid = Number(this.route.snapshot.paramMap.get('pid'));
    this.bidService.getBid(pid)
      .subscribe(bid => this.bid = bid);

    console.log(this.bid+' is fetched');
    
  }

  goBack():void{
    this.location.back();
  }

  save(): void{
    if(this.bid){
      this.bidService.updateBid(this.bid).subscribe(()=>this.goBack())
    }
  }
}
