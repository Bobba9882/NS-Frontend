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

  login(email: string, password: string): Observable<User> {
    let params = new HttpParams()
      .set("email", email)
      .set("password", password);


    return this.httpClient.get<User>(`${this.baseURl}`, {params : params})
  }
}
