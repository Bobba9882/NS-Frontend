import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../Services/auth.service";
import {UserService} from "../../Services/user.service";
import {User} from "../../Models/user";

@Component({
  selector: 'app-profile-home',
  templateUrl: './profile-home.component.html',
  styleUrls: ['./profile-home.component.css']
})
export class ProfileHomeComponent implements OnInit {

  constructor(private router : Router) { }

  user: User = UserService.loggedInUser

  ngOnInit(): void {
    console.log(UserService.loggedInUser)
  }

  logOut(){
    localStorage.clear()
    this.router.navigate(['home']).then(() => {window.location.reload()})
  }
}
