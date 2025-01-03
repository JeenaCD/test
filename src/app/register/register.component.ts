import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user={
    emailid:'',
    password:''
  }

  constructor(public post:PostService) { }

  ngOnInit(): void {
  }

  register(){
    this.post.register(this.user).subscribe(async (res)=>{
    })
  }

}
