import { Component, OnInit } from '@angular/core';
import { GetPost } from 'src/app/mock_data/get-post'; 
import { PostBid } from 'src/app/mock_data/post-bid';
import { AllPostsService } from 'src/app/services/all-posts.service'; 

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  allPosts:GetPost[] = []
  showBidForm: boolean = false

  productId!:number
  postBidForm!: PostBid
  posterId!:number
  productName!:string

  constructor(private allPostsService: AllPostsService) { }

  ngOnInit(): void {
    this.fetchallPosts()
  }

  fetchallPosts(){
    this.allPostsService.getAllPosts().subscribe(allPosts=>{
      this.allPosts=allPosts
      // console.log(this.allPosts);
    }); 
  }

  toggleMakeBidForm(userId:number,productName:string, productId:number){
    if(this.showBidForm){ 
      this.showBidForm = false
    }else{
      this.showBidForm = true
      this.posterId=userId
      this.productName=productName
      this.productId = productId
    }
    
  }
}
 