import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "../Models/user";
import {Trips} from "../Models/trip";
import {Token} from "../Models/token";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURl: string = "http://localhost:9090/api/v1/token"

  constructor(private httpClient: HttpClient) { }

  getToken(email: string, password: string): Observable<Token>{
    let meow='bobba'
    let meowword='247004844'


    let headers = new HttpHeaders({Authorization: 'Basic '+ window.btoa(meow+ ":"+ meowword)});
    headers = headers.append("responseType","text")



    return this.httpClient.post<Token>(`${this.baseURl}`, {}, {headers})
  }
}
