import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripRoutesComponent } from './trip-routes.component';

describe('TripRoutesComponent', () => {
  let component: TripRoutesComponent;
  let fixture: ComponentFixture<TripRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripRoutesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
