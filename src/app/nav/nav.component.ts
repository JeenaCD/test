import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  log:any;
  constructor(public post:PostService,public router:Router) { }

  ngOnInit(): void {
  
  }
  logout(){
    console.log("clicked");
    localStorage.removeItem('token');
        localStorage.clear();
        this.router.navigate(['/']);
  }

}
