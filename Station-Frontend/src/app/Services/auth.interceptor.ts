import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import jwtDecode, {JwtPayload} from "jwt-decode";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem("auth token")

    if (token) {

      const expiration = jwtDecode<JwtPayload>(token).exp
      const time = new Date(0)
      time.setUTCSeconds(<number>expiration)
      if (time >= new Date()) {
        const cloned = request.clone({
          headers: request.headers.set("Authorization", "Bearer " + token)
        })
        return next.handle(cloned)
      } else {
        alert("your login session has expired")
        localStorage.clear()
        location.reload()
        return next.handle(request)
      }
    } else {
      return next.handle(request)
    }
  }
}
