import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiToggleService } from 'src/app/services/ui-toggle.service';

@Component({
  selector: 'app-summary-card',
  templateUrl: './summary-card.component.html',
  styleUrls: ['./summary-card.component.css']
})
export class SummaryCardComponent implements OnInit {
  @Input() statTitle: string="title";
  @Input() stat: number=0; 
  // @Output() cardTriggered = new EventEmitter();

  sub!: Subscription

  constructor(public uiservice: UiToggleService) { 
    this.sub = this.uiservice.onToggle().subscribe(val => this.sub = val)
  }

  ngOnInit(): void {
  }

  // cardClicked(){
  //   this.cardTriggered.emit()
  // }

  showOverlay(){
    this.uiservice.toggleOverlay(this.statTitle)
  }

}
