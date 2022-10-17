import { Component, OnInit } from '@angular/core';
import {User} from "../../Models/user";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../Services/user.service";
import {AuthService} from "../../Services/auth.service";
import {Router} from "@angular/router";

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

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    let email = String(this.form.get('email')?.value)
    let password = String(this.form.get('password')?.value)
    this.authService
      .login(email,password)
      .subscribe({
        next: () => {this.router.navigate(['home'])}
      })
  }

}
