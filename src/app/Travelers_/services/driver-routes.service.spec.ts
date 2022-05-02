import { TestBed } from '@angular/core/testing';

import { DriverRoutesService } from './driver-routes.service';

describe('DriverRoutesService', () => {
  let service: DriverRoutesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DriverRoutesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
