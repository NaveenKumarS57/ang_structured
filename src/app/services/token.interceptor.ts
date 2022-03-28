import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private injector: Injector, private api: ApiService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // alert(JSON.stringify(req));
    // console.log(req);
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.api.GetToken()}`
      }
    })
    // console.log(tokenizedReq);
    return next.handle(tokenizedReq)
    // return next.handle(request);
  }

}
