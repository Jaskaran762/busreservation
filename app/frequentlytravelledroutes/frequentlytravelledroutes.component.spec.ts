import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequentlytravelledroutesComponent } from './frequentlytravelledroutes.component';

describe('FrequentlytravelledroutesComponent', () => {
  let component: FrequentlytravelledroutesComponent;
  let fixture: ComponentFixture<FrequentlytravelledroutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrequentlytravelledroutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequentlytravelledroutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
