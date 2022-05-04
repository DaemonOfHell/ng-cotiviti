import { Component, Input, OnInit } from '@angular/core';
import { BidService } from 'src/app/services/bid.service';  

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit { 
 
   myId!: string 
   myName!: string  
   myRoles!: string  
 
  totalBids!: number
  totalUsers!: number
  totalPosts!: number

  constructor(private bidService: BidService) { }

  ngOnInit(): void {
    this.fillMyInfo()
  }

  fetchStats():void{
    // this.heroService.getHeroes().subscribe(values=> this.totalUsers = values.length)
    this.bidService.getBids().subscribe(values=> this.totalBids = values.length)
  }

  fillMyInfo():void{ 
    const myInfo = JSON.parse(sessionStorage.getItem('userInfo')||'{}')
    this.myId = myInfo?.userId
    this.myName = myInfo?.username
    this.myRoles = myInfo?.roles.join(', ')
  }

}
