import { Component, OnInit } from '@angular/core';
import { Bid } from 'src/app/bid'; 
import { BidService } from 'src/app/services/bid.service'; 

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  bids: Bid[] = []
  // clickedHero?: Hero
 
  constructor(private heroService: BidService) { }

  ngOnInit(): void {
    this.fetchedHeroes()
  }

  // onClickHero(h: Hero){
  //   this.clickedHero = h;
  //   this.msgService.add(`HeroesComponent: selected hero: ${h.name}`)
  // }

  fetchedHeroes():void{
    this.heroService.getBids()
      .subscribe(bids=>this.bids=bids);
  }

  // add(title: string): void{
  //   title = title.trim()
  //   if(!title) return
  //   this.heroService.addBid({title} as Bid)
  //     .subscribe(h=>this.bids.push(h))
  // }

  delete(bid: Bid): void {
    console.log('deleting '+bid.id);
    
    this.bids = this.bids.filter(b => b.id !== bid.id);
    this.heroService.deleteBid(bid.id).subscribe();
  }
}

