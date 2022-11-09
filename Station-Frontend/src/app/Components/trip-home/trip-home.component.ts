import {Component, OnInit} from '@angular/core';
import {TripsService} from "../../Services/trips.service";
import {Trip} from "../../Models/trip";
import {DatePipe, TitleCasePipe} from "@angular/common";
import {AuthService} from "../../Services/auth.service";
import {UserService} from "../../Services/user.service";
import {User} from "../../Models/user";

@Component({
  selector: 'app-trip-home',
  templateUrl: './trip-home.component.html',
  styleUrls: ['./trip-home.component.css']
})
export class TripHomeComponent implements OnInit {

  constructor(private tripsService: TripsService, private titlecasePipe: TitleCasePipe, private datePipe: DatePipe, public authService: AuthService) {
  }

  user:User = UserService.loggedInUser

  foundTrips: Trip[]

  selectedTrip: Trip

  ngOnInit(): void {
    this.onReset()
  }

  fromStation: string
  toStation: string
  tripTime: string
  tripDate: string
  isArrival: boolean = false

  onSubmit() {
    this.toTitleCase()
    let date: string = new Date(this.tripDate + " " + this.tripTime).toISOString()
    this.tripsService.getTrips(this.fromStation, this.toStation, date, this.isArrival).subscribe({
      next: value => {this.foundTrips = value},
      complete: () => {this.onSelectingTrip(2); this.checkIfFavorite()}
    })
  }

   checkIfFavorite(){
    let savedTrips:string[] = []
    UserService.loggedInUser.savedTrips.forEach(value => {savedTrips.push(value.ctxRecon)})
    const values = this.foundTrips.filter(value => savedTrips.includes(value.ctxRecon))

    this.foundTrips.forEach(value => {
      if (values.includes(value)){
        value.isFavorite = true
      }
    })
  }

  changeIsArrival(bool: boolean) {
    this.isArrival = bool
  }

  toTitleCase() {
    this.fromStation = this.titlecasePipe.transform(this.fromStation)
    this.toStation = this.titlecasePipe.transform(this.toStation)
  }

  onSelectingTrip(id: number) {
    this.selectedTrip = this.foundTrips[id]
    this.selectedTrip.id = id

  }

  onSwap() {
    this.toTitleCase()
    let temp = this.fromStation
    this.fromStation = this.toStation
    this.toStation = temp
  }

  onReset() {
    let today = new Date()
    this.tripDate = <string>this.datePipe.transform(today, "yyyy-MM-dd")
    this.tripTime = <string>this.datePipe.transform(today, "HH:mm")
  }

  onFavorite() {
    this.selectedTrip.isFavorite = !this.selectedTrip.isFavorite
    if (this.selectedTrip.isFavorite){
      this.tripsService.saveTrip(this.selectedTrip.ctxRecon, UserService.loggedInUser.id).subscribe()
    }else {
      this.tripsService.deleteTrip(1)
    }

  }
}
