import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastmonthrecordsandprofitComponent } from './lastmonthrecordsandprofit.component';

describe('LastmonthrecordsandprofitComponent', () => {
  let component: LastmonthrecordsandprofitComponent;
  let fixture: ComponentFixture<LastmonthrecordsandprofitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastmonthrecordsandprofitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastmonthrecordsandprofitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
