import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../Models/user";
import jwtDecode from "jwt-decode";
import {TripsService} from "./trips.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURl: string = "http://localhost:9090/api/v1/user"

  constructor(private httpClient: HttpClient, private tripService: TripsService) {
  }

  public decodeUserToken(token: string) {
    const decodedInfo = jwtDecode<User>(token)

    const user = new User()
    user.email = decodedInfo.email
    user.firstName = decodedInfo.firstName
    user.lastName = decodedInfo.lastName
    user.id = decodedInfo.userId
    localStorage.setItem("user info", JSON.stringify(user))
  }

  getUserData() {
    const user: User = JSON.parse(String(localStorage.getItem("user info"))) as User
    return this.tripService.getTripsByUserId(user.id)
  }

  register(user: User) {
    return this.httpClient.post<User>(`${this.baseURl}`, user)
  }
}
