import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../Services/user.service";
import {User} from "../../Models/user";

@Component({
  selector: 'app-profile-home',
  templateUrl: './profile-home.component.html',
  styleUrls: ['./profile-home.component.css']
})
export class ProfileHomeComponent implements OnInit {

  constructor(private router: Router, private userService:UserService) {
  }

  user: User = JSON.parse(String(localStorage.getItem("user info"))) as User

  ngOnInit(): void {
    this.userService.getUserData().subscribe({
      next: value => {this.user.savedTrips = value}
    })
  }

  logOut() {
    localStorage.clear()
    this.router.navigate(['home']).then(() => {
      window.location.reload()
    })
  }
}
