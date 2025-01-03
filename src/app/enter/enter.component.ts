import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.css']
})
export class EnterComponent implements OnInit {

  users = [{
    emailId: '',
    phoneNumber: null,
  }]

  constructor(public post:PostService) { }

  ngOnInit(): void {
    this.post.getUsers().subscribe(async(res)=>{
      console.log(res);
      this.users = res.userslist;
    })
  }

}
