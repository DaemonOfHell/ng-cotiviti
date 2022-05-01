import { Component, OnInit } from '@angular/core';
import { Bid } from 'src/app/bid'; 
import { BidService } from 'src/app/services/bid.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  myBids: Bid[] = []

  myName: string = "Mr. User Prasad"
  accType: string = "general user"
  email: string = "ex@gmail.com"

  constructor(private heroService: BidService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void{
    this.heroService.getBids().subscribe(bids=>this.myBids= bids.slice(0,5))
  }
}
