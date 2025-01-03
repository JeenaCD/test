import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { PostService } from './post.service';

@Injectable({
  providedIn: 'root'
})
export class Authguard1Guard implements CanActivate {
  constructor(private post:PostService, private router:Router){}
  canActivate():boolean{
    if(this.post.loggedIn()){
      this.router.navigate(['/home']);
      return false;
    }
    else{
      return true;
    }
  } 
  
}
