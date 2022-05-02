import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTravelerComponent } from './login-traveler.component';

describe('LoginTravelerComponent', () => {
  let component: LoginTravelerComponent;
  let fixture: ComponentFixture<LoginTravelerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginTravelerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginTravelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
