import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Token} from "../Models/token";
import {User} from "../Models/user";
import jwtDecode from "jwt-decode";
import {TripsService} from "./trips.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURl: string = "http://localhost:9090/api/v1/user"
  public static loggedInUser = new User()

  constructor(private httpClient: HttpClient, private tripService : TripsService) {
  }

  decodeUserToken() {
    const decodedInfo = jwtDecode<any>(<string>localStorage.getItem("auth token"))
    UserService.loggedInUser.id = decodedInfo.userId
    UserService.loggedInUser.firstName = decodedInfo.firstName
    UserService.loggedInUser.lastName = decodedInfo.lastName
    UserService.loggedInUser.email = decodedInfo.email
  }

  getUserData() {
    this.tripService.getTripsByUserId(UserService.loggedInUser.id).subscribe({
      next: value => {
        UserService.loggedInUser.savedTrips = value
      }
    })
  }

  register(user: User) {
    return this.httpClient.post<User>(`${this.baseURl}`, user)
  }
}
