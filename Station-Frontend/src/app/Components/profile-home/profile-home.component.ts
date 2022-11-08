import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../Services/auth.service";

@Component({
  selector: 'app-profile-home',
  templateUrl: './profile-home.component.html',
  styleUrls: ['./profile-home.component.css']
})
export class ProfileHomeComponent implements OnInit {

  constructor(private router : Router, public authService : AuthService) { }

  ngOnInit(): void {
    console.log(this.authService.loggedInUser)
  }

  logOut(){
    localStorage.clear()
    this.router.navigate(['home']).then(() => {window.location.reload()})
  }
}
