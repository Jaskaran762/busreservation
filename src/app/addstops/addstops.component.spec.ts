import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstopsComponent } from './addstops.component';

describe('AddstopsComponent', () => {
  let component: AddstopsComponent;
  let fixture: ComponentFixture<AddstopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddstopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddstopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
