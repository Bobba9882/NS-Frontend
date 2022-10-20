import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../Services/auth.service";
import {Router} from "@angular/router";
import {UserService} from "../../Services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  })

  show:boolean = false

  constructor(private authService : AuthService,public router : Router) { }

  ngOnInit(): void {
  }

  onView(){
    this.show = !this.show
  }


  onSubmit() {
    let email = String(this.form.get('email')?.value)
    let password = String(this.form.get('password')?.value)
    this.authService
      .createToken(email, password)
      .subscribe({
        next: () => {this.router.navigate(['home'])}
      })
  }


  onRegister(){
    this.router.navigate(['register'])
  }

}
