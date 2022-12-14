import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from '@angular/common/http';
import jwtDecode, {JwtPayload} from "jwt-decode";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler){
    const authToken = localStorage.getItem("auth token")

    if (authToken) {

      const expiration = jwtDecode<JwtPayload>(authToken).exp
      const expirationDate = new Date(0)
      expirationDate.setUTCSeconds(<number>expiration)

      if (expirationDate >= new Date()) {
        const cloned = request.clone({
          headers: request.headers.set("Authorization", "Bearer " + authToken)
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
