import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Trip} from "./trip";

@Injectable({
  providedIn: 'root'
})
export class TripPlannerService {

  private baseURl: string = "https://gateway.apiportal.ns.nl/reisinformatie-api/api/v3/trips"


  constructor(private httpClient: HttpClient) {
  }

  // getTrips(fromStation : string, toStation : string):Observable<Trip>{
  //
  // }
}
