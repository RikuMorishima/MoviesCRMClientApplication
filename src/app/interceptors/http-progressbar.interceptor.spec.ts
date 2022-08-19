import { TestBed } from '@angular/core/testing';

import { HttpProgressbarInterceptor } from './http-progressbar.interceptor';

describe('HttpProgressbarInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpProgressbarInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpProgressbarInterceptor = TestBed.inject(HttpProgressbarInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
