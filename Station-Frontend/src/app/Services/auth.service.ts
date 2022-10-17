import {Injectable} from '@angular/core';
import {UserService} from "./user.service";
import {BehaviorSubject, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false)
  public isLoggedIn$ = this._isLoggedIn$.asObservable()

  constructor(private userService: UserService) {
    const token = localStorage.getItem("auth token")
    this._isLoggedIn$.next(!!token)
  }

  login(email: string, password: string) {
    return this.userService.loginUser(email, password).pipe(
      tap(response => {
        response.token = "TEMP_TOKEN";
        localStorage.setItem("auth token", response.token)
        this._isLoggedIn$.next(true)
      })
    )
  }
}
