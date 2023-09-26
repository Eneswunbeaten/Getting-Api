import { Component,OnInit } from '@angular/core';
import { Post } from './post';
import{HttpClient} from '@angular/common/http'
import { PostU } from './postu';
import { ActivatedRoute } from '@angular/router';
declare let alertify:any;
@Component({
  selector: 'app-social-list',
  templateUrl: './social-list.component.html',
  styleUrls: ['./social-list.component.css']
})
export class SocialListComponent implements OnInit {
  
constructor(private http:HttpClient, private activatedRoute:ActivatedRoute){ }
path:string="https://jsonplaceholder.typicode.com/"
posts:Post[]=[]
users:PostU[]=[]
today=new Date(2023,9,26)
ngOnInit() {
  this.getPosts()
  this.getUsers()
  }
  getUsers(){
    this.http.get<PostU[]>(this.path+"users/").subscribe(response=>{
      this.users=response;
    })
  }
getPosts(){
  this.http.get<Post[]>(this.path+"posts/").subscribe(response=>{
  this.posts=response;
  })
}
}
