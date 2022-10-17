import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "../Models/user";
import {Trips} from "../Models/trip";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURl: string = "http://localhost:9090/api/v1/user"

  constructor(private httpClient: HttpClient) { }

  loginUser(email: string, password: string): Observable<User>{
    let params = new HttpParams()
      .set("email", email)
      .set("password", password)

    return this.httpClient.get<User>(`${this.baseURl}`, {params : params})
  }
}
