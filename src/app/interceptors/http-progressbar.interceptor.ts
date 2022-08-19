import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgProgressComponent } from 'ngx-progressbar';


@Injectable()
export class HttpProgressbarInterceptor implements HttpInterceptor {

  constructor(private progressbar:NgProgressComponent) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.progressbar.start();

    this.progressbar.complete();
    return next.handle(request);
  }
}
