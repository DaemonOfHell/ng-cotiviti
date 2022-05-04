import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-admin-dashboard-summary',
  templateUrl: './admin-dashboard-summary.component.html',
  styleUrls: ['./admin-dashboard-summary.component.css']
})
export class AdminDashboardSummaryComponent implements OnInit {
  totalUsersTitle:string = "users";
  totalUsersStat!:number;

  totalBidsTitle:string = "bids";
  totalBidsStat!:number;

  totalPostsTitle:string = "posts";
  totalPostsStat!:number;

  constructor(private adminService: AdminServiceService) { }

  ngOnInit(): void {
    this.getUsersCount();
    this.getBidsCount()
    this.getPostsCount()
  }

  getUsersCount():void{
    this.adminService.getTotalUsers()
      .subscribe(userCount=>this.totalUsersStat=userCount);
  }

  getBidsCount():void{
    this.adminService.getTotalBids()
      .subscribe(userCount=>this.totalBidsStat=userCount);
  }

  getPostsCount():void{
    this.adminService.getTotalPosts()
      .subscribe(userCount=>this.totalPostsStat=userCount);
  }

}
