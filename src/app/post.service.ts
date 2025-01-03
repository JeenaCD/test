import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(public http:HttpClient) { }

  getPost(){
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts');
  }

  register(user:any){
    console.log(user)
    return this.http.post<any>('http://localhost:8000/register',user);
  }


  login(user:any){
    return this.http.post<any>('http://localhost:8000/login',user)
  }

  getToken(){
    return localStorage.getItem('token');
   }

  getUsers(){
    return this.http.get<any>('http://localhost:8000/getusers')
  }

  loggedIn(){
    return !!localStorage.getItem('token')  
  }
}
