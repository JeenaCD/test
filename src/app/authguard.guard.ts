import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PostService } from './post.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private post:PostService, private router:Router){}
  canActivate():boolean{
    if(this.post.loggedIn()){
      return true;
    }
    else{
      this.router.navigate([''])
      return false;
    }
  
}
}
