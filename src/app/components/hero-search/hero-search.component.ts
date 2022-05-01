import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { Bid } from 'src/app/bid';
import { BidService } from 'src/app/services/bid.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  bids$!: Observable<Bid[]>
  private searchTerms = new Subject<string>();

  constructor(private bidService: BidService) { }

  search(term: string):void{
    this.searchTerms.next(term)
  }

  ngOnInit(): void {
    this.bids$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string)=> this.bidService.searchBids(term))
      )
  }

}
