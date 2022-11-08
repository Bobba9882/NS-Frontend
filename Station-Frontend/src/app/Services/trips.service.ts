import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Trip, Trips} from "../Models/trip";
import {Disruption} from "../Models/disruption";

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  private nsURl: string = "http://localhost:8080/api/v1/trip"
  private userURl: string = "http://localhost:9090/api/v1/trip"

  constructor(private httpClient: HttpClient) {
  }

  getTrips(fromStation: string, toStation: string, date: string, isArrival: boolean): Observable<Trips> {
    let params = new HttpParams()
      .set("fromStation", fromStation)
      .set("toStation", toStation)
      .set("date", date)
      .set("isArrival", isArrival)

    return this.httpClient.get<Trips>(`${this.nsURl}`, {params: params})
  }


  saveTrip(data:string, id:number) {
    //code for saving trip
    let params = new HttpParams()
      .set("data", data)
      .set("id", id)
    return this.httpClient.post(`${this.userURl}`, {},{params : params})
  }

  deleteTrip(id: number) {
    //code for saving trip
    console.log("this trip has been deleted: " + id)
  }

  getTripsByUserId(id: number):Observable<Trip[]>{
    let params = new HttpParams()
      .set("id", id)
    return this.httpClient.get<Trip[]>(`${this.userURl}`, {params:params})
  }
}
