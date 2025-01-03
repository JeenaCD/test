import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user={
    emailid:'',
    password:''
  }
 token: any;
  constructor(public post:PostService,public router:Router) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.user);
    this.post.login(this.user).subscribe(async(res)=>{
      // alert(res.msg)
      if(res.token){
        this.token = res.token.split(" ")
          localStorage.setItem('token',this.token);
          console.log(this.token);
          this.router.navigate(['/home']);
      }
    })
  }
}
