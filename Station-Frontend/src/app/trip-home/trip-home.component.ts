import {Component, OnInit} from '@angular/core';
import {TripsService} from "../Services/trips.service";
import {Trip} from "../Models/trip";
import {TitleCasePipe} from "@angular/common";

@Component({
  selector: 'app-trip-home',
  templateUrl: './trip-home.component.html',
  styleUrls: ['./trip-home.component.css']
})
export class TripHomeComponent implements OnInit {

  constructor(private tripsService: TripsService, private titlecasePipe: TitleCasePipe) {
  }

  Trips: Trip[]

  selectedTrip : Trip

  ngOnInit(): void {
  }

  fromStation: string
  toStation: string

  onSubmit() {
    this.fromStation = this.titlecasePipe.transform(this.fromStation)
    this.toStation = this.titlecasePipe.transform(this.toStation)
    this.tripsService.getTrips(this.fromStation, this.toStation).subscribe({
      next: value => this.Trips = value.trips,
      complete: () => this.selectedTrip = this.Trips[2]
    })
  }

  onSelect(id: number) {
    this.selectedTrip = this.Trips[id]
  }

}
