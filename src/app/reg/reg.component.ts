import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  constructor(private fb:FormBuilder,public post:PostService,public router:Router) { }

  ngOnInit(): void {
  }

  submit = false;

  registrationForm = this.fb.group({
    name:['',Validators.required],
    phone:['',[Validators.pattern('[0-9]{10}'),Validators.required]],
    emailid:['',[Validators.pattern('^[a-z0-9,%+]+@[a-z0-9.-]+\.[a-z]{2,4}$'),Validators.required]],
    password:['',[Validators.minLength(6),Validators.required]]
  })

  get f(){
    return this.registrationForm.controls;
  }

  onsubmit(){
    this.submit = true;
    console.log(this.registrationForm);
    this.post.register(this.registrationForm.value).subscribe(async (res)=>{
      if(res.flag == 1){
        alert(res.msg);
        this.router.navigate(['']);
      }
      else
        alert(res.msg);
      
    })
  }

  
}
