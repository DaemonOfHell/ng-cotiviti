import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard-summary',
  templateUrl: './admin-dashboard-summary.component.html',
  styleUrls: ['./admin-dashboard-summary.component.css']
})
export class AdminDashboardSummaryComponent implements OnInit {
  totalUsersTitle:string = "total users";
  totalUsersStat:number= 10321;

  totalBidsTitle:string = "total bids";
  totalBidsStat:number= 239758910;

  constructor() { }

  ngOnInit(): void {
  }

}
