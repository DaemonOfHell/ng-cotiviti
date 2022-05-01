import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-summary',
  templateUrl: './dashboard-summary.component.html',
  styleUrls: ['./dashboard-summary.component.css']
})
export class DashboardSummaryComponent implements OnInit {

  totalPostTitle:string = "posted";
  totalPostStat:number= 10;

  soldTitle:string = "sold";
  soldStat:number= 2;

  wonTitle:string = "won";
  wonStat:number= 0;

  constructor() { }

  ngOnInit(): void {
  }

}
