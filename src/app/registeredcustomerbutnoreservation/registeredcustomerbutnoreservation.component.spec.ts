import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredcustomerbutnoreservationComponent } from './registeredcustomerbutnoreservation.component';

describe('RegisteredcustomerbutnoreservationComponent', () => {
  let component: RegisteredcustomerbutnoreservationComponent;
  let fixture: ComponentFixture<RegisteredcustomerbutnoreservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteredcustomerbutnoreservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredcustomerbutnoreservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
