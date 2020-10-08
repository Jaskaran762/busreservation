import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStopsForBusComponent } from './add-stops-for-bus.component';

describe('AddStopsForBusComponent', () => {
  let component: AddStopsForBusComponent;
  let fixture: ComponentFixture<AddStopsForBusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStopsForBusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStopsForBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
