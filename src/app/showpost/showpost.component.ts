import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-showpost',
  templateUrl: './showpost.component.html',
  styleUrls: ['./showpost.component.css']
})
export class ShowpostComponent implements OnInit {

  public posts = [{
    "userId": null,
    "id": null,
    "title": '',
    "body":''
  }];
  clicked = false;

  constructor(public post:PostService) { }

  ngOnInit(): void {
  }

  getPost(){
    this.clicked = true;
    this.post.getPost().subscribe(async (res:any)=>{
      this.posts = res;
    })
  }

}
