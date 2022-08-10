import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupform : FormGroup
  constructor(private http : HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.signupform = new FormGroup({
      "email" : new FormControl('',Validators.required),
      "password" : new FormControl('',Validators.required)
    })
  }

  register(){
    // if(this.email==''){
    //   alert('please enter email');
    //   return;
    // }
    // if(this.password==''){
    //   alert('please enter password');
    //   return;
    // }
    // if(this.signupform.valid){
    //   this.http.post("https://signuppoc-b0b0d-default-rtdb.firebaseio.com/registration.json", this.signupform.value).subscribe();
    //   this.signupform.reset()
    // }else{
    //   alert("Please complete the form")
    // }
    // this.auth.register(this.email,this.password);
    this.http.post("https://signuppoc-b0b0d-default-rtdb.firebaseio.com/registration.json", this.signupform.value).subscribe();
      this.signupform.reset()
      this.router.navigate(['/auth/login'])
  }

}
