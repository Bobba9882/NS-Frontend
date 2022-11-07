import {Injectable} from '@angular/core';
import {TokenService} from "./token.service";
import {BehaviorSubject, tap} from "rxjs";
import {UserService} from "./user.service";
import {User} from "../Models/user";
import jwtDecode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false)
  public isLoggedIn$ = this._isLoggedIn$.asObservable()
  public userCredentials = new User()

  constructor(private tokenService: TokenService, private userService: UserService) {
    const user = localStorage.getItem("auth token")
    if (user){
      this.decodeToken()
    }
    this._isLoggedIn$.next(!!user)
  }


  createToken(email: string, password: string) {
    return this.tokenService.getToken(email,password).pipe(
      tap(response => {
        localStorage.setItem("auth token", response.text)
        this.decodeToken()
        this._isLoggedIn$.next(true)
      }))
  }

  decodeToken(){
    const decodedInfo =jwtDecode<any>(<string>localStorage.getItem("auth token"))
    this.userCredentials.id = decodedInfo.userId
    this.userCredentials.firstName = decodedInfo.firstName
    this.userCredentials.lastName = decodedInfo.lastName
    this.userCredentials.email = decodedInfo.email
  }
}
