import { TestBed } from '@angular/core/testing';

import { LoginTravelerService } from './login-traveler.service';

describe('LoginTravelerService', () => {
  let service: LoginTravelerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginTravelerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
