import {Injectable} from '@angular/core';
import {TokenService} from "./token.service";
import {BehaviorSubject, tap} from "rxjs";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false)
  public isLoggedIn$ = this._isLoggedIn$.asObservable()

  constructor(private tokenService: TokenService, private userService: UserService) {
    const user = localStorage.getItem("auth token")
    this._isLoggedIn$.next(!!user)
  }


  createToken(email: string, password: string) {
    return this.tokenService.getToken(email,password).pipe(
      tap(response => {
        localStorage.setItem("auth token", response.text)
        this.userService.decodeUserToken()
        this.userService.getUserData()
        this._isLoggedIn$.next(true)
      }))
  }
}
