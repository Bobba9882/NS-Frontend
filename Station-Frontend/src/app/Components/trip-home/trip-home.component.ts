import {Component, OnInit} from '@angular/core';
import {TripsService} from "../../Services/trips.service";
import {Station, Trip} from "../../Models/trip";
import {DatePipe, TitleCasePipe} from "@angular/common";
import {AuthService} from "../../Services/auth.service";
import {UserService} from "../../Services/user.service";
import {User} from "../../Models/user";
import {map, Observable, startWith} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-trip-home',
  templateUrl: './trip-home.component.html',
  styleUrls: ['./trip-home.component.css']
})
export class TripHomeComponent implements OnInit {

  constructor(private tripsService: TripsService, private titlecasePipe: TitleCasePipe, private datePipe: DatePipe, public authService: AuthService, private userService: UserService) {
  }

  user: User = JSON.parse(String(localStorage.getItem("user info"))) as User

  foundTrips: Trip[]

  public static SelectedTrip: Trip
  _selectedTrip: Trip = TripHomeComponent.SelectedTrip

  form = new FormGroup({
    fromStation: new FormControl('', Validators.required),
    toStation: new FormControl('', Validators.required),
    tripDate: new FormControl('', Validators.required),
    tripTime: new FormControl('', Validators.required),
  })


  ngOnInit(): void {
    this.onReset()
    this.tripsService.getStations().subscribe({
      next: value => {
        this.allStations = value
      },
    })
    this.filteredFrom = this.form.controls['fromStation'].valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );

    this.filteredTo = this.form.controls['toStation'].valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );

  }

  private _filter(value: string): string[] {
    const stations: string[] = []
    this.allStations.forEach(value1 => {
      stations.push(value1.namen.lang)
    })

    const filterValue = value.toLowerCase();

    return stations.filter(option => option.toLowerCase().includes(filterValue));
  }

  allStations: Station[] = []
  filteredFrom: Observable<string[]>
  filteredTo: Observable<string[]>
  isArrival: boolean = false

  onSubmit() {
    const temp = this.allStations
    const fromStation = temp.find(x => x.namen.lang == this.form.controls["fromStation"].value) as Station
    const toStation = temp.find(x => x.namen.lang == this.form.controls["toStation"].value) as Station

    const date: string = new Date(this.form.controls['tripDate'].value + " " + this.form.controls['tripTime'].value).toISOString()
    this.tripsService.getTrips(fromStation.UICCode, toStation.UICCode, date, this.isArrival).subscribe({
      next: value => {
        this.foundTrips = value
      },
      complete: () => {
        this.onSelectingTrip(2);
      }
    })
  }


  changeIsArrival(bool: boolean) {
    this.isArrival = bool
  }

  onSelectingTrip(id: number) {
    this._selectedTrip = this.foundTrips[id]
    this._selectedTrip.id = id

  }

  onSwap() {
    const temp = this.form.controls['fromStation'].value
    this.form.patchValue({fromStation: this.form.controls["toStation"].value})
    this.form.patchValue({toStation: temp})
  }

  onReset() {
    const today = new Date()
    this.form.patchValue({tripDate: <string>this.datePipe.transform(today, "yyyy-MM-dd")})
    this.form.patchValue({tripTime: <string>this.datePipe.transform(today, "HH:mm")})
  }
}
