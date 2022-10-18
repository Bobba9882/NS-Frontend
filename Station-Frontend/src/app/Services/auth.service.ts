import {enableProdMode, Injectable} from '@angular/core';
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
    const user = localStorage.getItem("user id")
    this._isLoggedIn$.next(!!user)
  }

  login(email: string, password: string) {
     return this.createToken(email,password).pipe(
       tap( () => {this.loginUser(email, password).subscribe()})
     )
  }

  createToken(email: string, password: string) {
    return this.tokenService.getToken(email,password).pipe(
      tap(response => {
        localStorage.setItem("auth token", response.text)
        console.log("token set")
      }))
  }

  loginUser(email: string, password: string) {
    return this.userService.login(email, password).pipe(
      tap(response => {
        localStorage.setItem("user id", String(response.id))
        this._isLoggedIn$.next(true)
      }))
  }
}
