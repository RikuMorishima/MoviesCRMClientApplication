import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgProgress, NgProgressRef } from 'ngx-progressbar';

@Injectable()
export class ProgressBarInterceptor implements HttpInterceptor {

  constructor(private progress:NgProgress) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let progressRef = this.progress.ref('loadProgress');
    progressRef.start();
    let event=next.handle(request);
    progressRef.set(99);
    //progressRef.complete();
    return event;
  }
}
 