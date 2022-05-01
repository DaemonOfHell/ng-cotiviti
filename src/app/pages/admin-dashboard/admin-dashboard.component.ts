import { Component, OnInit } from '@angular/core';
import { BidService } from 'src/app/services/bid.service';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  myName: string = "Mr. Admin Narayan"
  accType: string = "Admin"
  email: string = "ex@bidder.co"

  totalBids!: number
  totalUsers!: number

  constructor(private heroService: HeroService, private bidService: BidService) { }

  ngOnInit(): void {

  }

  fetchStats():void{
    this.heroService.getHeroes().subscribe(values=> this.totalUsers = values.length)
    this.bidService.getBids().subscribe(values=> this.totalBids = values.length)
  }

}
