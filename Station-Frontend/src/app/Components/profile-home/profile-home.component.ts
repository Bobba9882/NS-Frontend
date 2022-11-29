import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../Services/user.service";
import {User} from "../../Models/user";
import {TripsService} from "../../Services/trips.service";
import {Trip} from "../../Models/trip";
import {TripHomeComponent} from "../trip-home/trip-home.component";

@Component({
  selector: 'app-profile-home',
  templateUrl: './profile-home.component.html',
  styleUrls: ['./profile-home.component.css']
})
export class ProfileHomeComponent implements OnInit {

  constructor(private router: Router, private userService:UserService, private tripsService: TripsService) {
  }

  user: User = JSON.parse(String(localStorage.getItem("user info"))) as User

  ngOnInit(): void {
    this.updateUser()
  }

  logOut() {
    localStorage.clear()
    this.router.navigate(['home']).then(() => {
      window.location.reload()
    })
  }

  updateUser(){
    this.userService.getUserData().subscribe({
      next: value => {this.user.savedTrips = value;}
    })
  }

  deleteTrip(id:number){
    this.tripsService.deleteTrip(id).subscribe({
      complete: () => {this.updateUser()}
    })
  }

  redirectToShowTrip(trip:Trip){
    TripHomeComponent.SelectedTrip = trip
    this.router.navigate(['home'])
  }
}
