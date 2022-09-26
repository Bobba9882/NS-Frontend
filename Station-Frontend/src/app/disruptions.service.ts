import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class DisruptionsService {

  private baseURl: string = "https://gateway.apiportal.ns.nl/reisinformatie-api/api/v3/disruptions"


  constructor(private httpClient: HttpClient) {
  }

  getDisruptions(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseURl}`, {
      headers: new HttpHeaders().set("Ocp-Apim-Subscription-Key", "22253f3953f84fe28e20863f4bd6340e"),
      // params: new HttpParams().set("isActive",true)
    })
  }
}
