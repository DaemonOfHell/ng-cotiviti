import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UiToggleService } from 'src/app/services/ui-toggle.service';

@Component({
  selector: 'app-summary-card',
  templateUrl: './summary-card.component.html',
  styleUrls: ['./summary-card.component.css']
})
export class SummaryCardComponent implements OnInit {
  @Input() statTitle!: string;
  @Input() stat: number=0; 
  // @Output() cardTriggered = new EventEmitter();

  // sub!: Subscription

  constructor(private uiservice: UiToggleService, private router: Router) { 
    // this.sub = this.uiservice.onToggle().subscribe(val => this.sub = val)
  }

  ngOnInit(): void {
  }
 
  // showOverlay(){
  //   this.uiservice.toggleOverlay(this.statTitle)
  // }

  // toggleOverlay(){
  //   this.uiservice.toggleOverlay(this.statTitle)
  // }

  // switchTo(){
  //   this.router.navigate['user/'+this.statTitle]
  // }
}
