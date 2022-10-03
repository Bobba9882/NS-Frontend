import {Component, OnInit} from '@angular/core';
import {TripsService} from "../Services/trips.service";
import {Trip} from "../Models/trip";
import {FormBuilder} from "@angular/forms";
import {TitleCasePipe} from "@angular/common";

@Component({
  selector: 'app-trip-home',
  templateUrl: './trip-home.component.html',
  styleUrls: ['./trip-home.component.css']
})
export class TripHomeComponent implements OnInit {

  constructor(private tripsService: TripsService, private titlecasePipe:TitleCasePipe) {
  }

  Trips: Trip[]

  ngOnInit(): void {
    this.tripsService.getTrips("Rijen", "Tilburg").subscribe({
      next: value => this.Trips = value.trips
    })
  }

  fromStation: string = ""
  toStation: string = ""

  onSubmit() {
    this.fromStation = this.titlecasePipe.transform(this.fromStation)
    this.toStation = this.titlecasePipe.transform(this.toStation)
    this.tripsService.getTrips(this.fromStation, this.toStation).subscribe({
      next: value => this.Trips = value.trips
    })
  }

}
