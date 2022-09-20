import { TestBed } from '@angular/core/testing';

import { JwtIterceptorInterceptor } from './jwt-iterceptor.interceptor';

describe('JwtIterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      JwtIterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: JwtIterceptorInterceptor = TestBed.inject(JwtIterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
