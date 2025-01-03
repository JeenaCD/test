import { Injectable,Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { PostService } from './post.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private inj:Injector) { }
  intercept(req:any,nxt:any){
    let postService = this.inj.get(PostService);
    let tokenizedReq = req.clone(
      {
        setHeaders:{
          Authorization:`Bearer ${postService.getToken()}`,
          apikey:"336648b53ef41037ff7984e21fa8cbaca8a6dc0385f75c5ae604ee19d41f1f82"
        }
      }
    )
    return nxt.handle(tokenizedReq);
  }

}
