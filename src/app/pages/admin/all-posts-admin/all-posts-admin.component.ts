import { Component, OnInit } from '@angular/core';
import { GetPost } from 'src/app/mock_data/get-post';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts-admin.component.html',
  styleUrls: ['./all-posts-admin.component.css']
})
export class AllPostsAdminComponent implements OnInit {

  allPosts:any=[]

  constructor(private adminService: AdminServiceService) { }

  ngOnInit(): void {
    this.fetchAllPosts()
  }

  fetchAllPosts(){
    this.adminService.getAllPosts().subscribe(posts=>{
      this.allPosts = posts
      console.log(this.allPosts);
      
    })
  }
}
