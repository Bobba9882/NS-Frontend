import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Disruption} from "./disruption";
import {Trip} from "./trip";

@Injectable({
  providedIn: 'root'
})

export class DisruptionsService {

  private baseURl: string = "http://localhost:8080/api/v1/"


  constructor(private httpClient: HttpClient) {
  }

  getDisruptions(): Observable<Disruption[]> {
    this.baseURl += "disruptions"
    return this.httpClient.get<Disruption[]>(`${this.baseURl}`)
  }
}

