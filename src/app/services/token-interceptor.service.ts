import { HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor( private injector: Injector, private api: ApiService) { }
  intercept(req: { clone: (arg0: { setHeaders: { Authorization: string; }; }) => any; }, next: { handle: (arg0: any) => any; }){
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.api.GetToken()}`
      }
    })
    return next.handle(tokenizedReq)
  }
}
