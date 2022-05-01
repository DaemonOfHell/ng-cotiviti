import { Component, OnInit, Output,EventEmitter } from '@angular/core'; 
import { Subscription } from 'rxjs';
import { Bid } from 'src/app/bid';

@Component({
  selector: 'app-post-bid',
  templateUrl: './post-bid.component.html',
  styleUrls: ['./post-bid.component.css']
})
export class PostBidComponent implements OnInit {
  @Output() onPosted: EventEmitter<Bid> = new EventEmitter()
 

  pid!: number
  title!:string
  startingPrice!: number
   
  @Output() showPostForm: boolean = false
  subscription!: Subscription

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.title.trim()){
      alert("item title is required!")
      return
    }
    if(!this.startingPrice){
      alert("item price is required!")
    }

    const newPost = {
      pid: 100,
      title: this.title,
      running_price: this.startingPrice
    }

    this.onPosted.emit(newPost)

    this.title = '' 
    this.startingPrice = 0
  }
} 