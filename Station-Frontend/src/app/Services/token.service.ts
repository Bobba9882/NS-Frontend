import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Token} from "../Models/token";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private baseURl: string = "http://localhost:9090/api/v1/token"

  constructor(private httpClient: HttpClient) { }

  getToken(): Observable<Token>{
    let username='bobba'
    let password='247004844'


    let headers = new HttpHeaders({Authorization: 'Basic '+ window.btoa(username+ ":"+ password)});
    headers = headers.append("responseType","text")



    return this.httpClient.post<Token>(`${this.baseURl}`, {}, {headers})
  }
}
