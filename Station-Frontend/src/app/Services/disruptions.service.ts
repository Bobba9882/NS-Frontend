import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Disruption} from "../Models/disruption";

@Injectable({
  providedIn: 'root'
})

export class DisruptionsService {

  private baseURl: string = "http://localhost:8080/api/v1/disruptions"


  constructor(private httpClient: HttpClient) {
  }

  getDisruptions(): Observable<Disruption[]> {
    return this.httpClient.get<Disruption[]>(`${this.baseURl}`)
  }
}

