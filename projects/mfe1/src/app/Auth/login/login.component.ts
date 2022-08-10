import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http : HttpClient, private router : Router) { }
  loginForm : FormGroup
  email : string = '';
  password : string = '';

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      "email" : new FormControl('',Validators.required),
      "password" : new FormControl('',Validators.required)
    })
  }
  logUser : any;
  login(){
    this.http.get("https://signuppoc-b0b0d-default-rtdb.firebaseio.com/registration.json").pipe(map((getData: any) => {
      let dataArray = []
      for (let key in getData) {
        dataArray.push(getData[key])
      }
      return dataArray
    })).subscribe(data => {
      this.logUser = data.filter(ele => {
        if (ele.email === this.loginForm.value.email && ele.password === this.loginForm.value.password) {
          
          alert("login successfull")
          this.loginForm.reset()
          this.router.navigate(["dashboard"])
        }
      })})
  }

  signInWithGoogle(){
    // this.auth.googleSignIn();
  }

}
