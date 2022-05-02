import { TestBed } from '@angular/core/testing';

import { TripEventsService } from './trip-events.service';

describe('TripEventsService', () => {
  let service: TripEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TripEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
