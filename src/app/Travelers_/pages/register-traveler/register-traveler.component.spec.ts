import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTravelerComponent } from './register-traveler.component';

describe('RegisterTravelerComponent', () => {
  let component: RegisterTravelerComponent;
  let fixture: ComponentFixture<RegisterTravelerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterTravelerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterTravelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
