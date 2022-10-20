import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Token} from "../Models/token";
import {User} from "../Models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURl: string = "http://localhost:9090/api/v1/user"

  constructor(private httpClient: HttpClient) {
  }

  register(user : User){
    console.log(user.firstName)
    console.log(user.lastName)
    console.log(user.password)
    console.log(user.email)
    return this.httpClient.post<User>(`${this.baseURl}`, user)
  }
}
