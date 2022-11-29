import {Component, Input, OnInit} from '@angular/core';
import {Trip} from "../../Models/trip";
import {TripsService} from "../../Services/trips.service";
import {UserService} from "../../Services/user.service";
import {User} from "../../Models/user";

@Component({
  selector: 'app-trip-view',
  templateUrl: './selected-trip-view.component.html',
  styleUrls: ['./selected-trip-view.component.css']
})
export class SelectedTripViewComponent implements OnInit {

  constructor(private tripsService : TripsService, private userService: UserService) { }

  ngOnInit(): void {
    this.updateUser()
  }

  @Input() selectedTrip: Trip
  user: User = JSON.parse(String(localStorage.getItem("user info"))) as User

  onFavorite() {
    this.selectedTrip.isFavorite = !this.selectedTrip.isFavorite
    if (this.selectedTrip.isFavorite) {
      this.tripsService.saveTrip(this.selectedTrip.ctxRecon, this.user.id).subscribe({
        complete: () => this.updateUser()
      })
    } else {
      this.tripsService.deleteTrip(this.selectedTrip.tripId).subscribe({
        complete: () => this.updateUser()
      })
    }
  }

  updateUser() {
    this.userService.getUserData().subscribe({
      next: value => {
        this.user.savedTrips = value
      },
      complete: () => {
        this.checkIfFavorite()
      }
    })
  }

  checkIfFavorite() {
    let savedTrips: string[] = []
    this.user.savedTrips.forEach(trip => {
      savedTrips.push(trip.ctxRecon)
    })

    this.selectedTrip.isFavorite = savedTrips.some(value => this.selectedTrip.ctxRecon == value)
  }

}
