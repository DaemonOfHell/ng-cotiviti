import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

/** interceptor to fill BASIC-AUTH header tokens */
@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  //   const token = sessionStorage.getItem('token')
  //  const Authorization = 'Basic ' + token 
  //   const req = request.clone(
  //     {
  //       setHeaders:{
  //         Authorization
  //       }
  //     }
  //   )
    
  //   return next.handle(req);
  return next.handle(request)
  }
}
