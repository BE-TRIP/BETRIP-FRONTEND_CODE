import { TestBed } from '@angular/core/testing';

import { LoginDriverService } from './login-driver.service';

describe('LoginDriverService', () => {
  let service: LoginDriverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginDriverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
