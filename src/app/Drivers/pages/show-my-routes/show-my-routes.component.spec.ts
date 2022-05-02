import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMyRoutesComponent } from './show-my-routes.component';

describe('ShowMyRoutesComponent', () => {
  let component: ShowMyRoutesComponent;
  let fixture: ComponentFixture<ShowMyRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMyRoutesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMyRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
