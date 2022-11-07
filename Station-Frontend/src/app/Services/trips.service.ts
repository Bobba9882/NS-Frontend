import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Trips} from "../Models/trip";
import {Disruption} from "../Models/disruption";

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  private baseURl: string = "http://localhost:8080/api/v1/trip"

  constructor(private httpClient: HttpClient) {
  }

  getTrips(fromStation: string, toStation: string, date : string, isArrival :boolean): Observable<Trips> {
    let params = new HttpParams()
      .set("fromStation", fromStation)
      .set("toStation", toStation)
      .set("date",date)
      .set("isArrival", isArrival)

    return this.httpClient.get<Trips>(`${this.baseURl}`, {params : params})
  }

  saveTrip(code:string){
    //code for saving trip
    console.log("this trip has been saved: " + code)
  }

  deleteTrip(code:string){
    //code for saving trip
    console.log("this trip has been deleted: " + code)
  }
}
