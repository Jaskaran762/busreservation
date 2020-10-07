import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualDetailsComponent } from './annual-details.component';

describe('AnnualDetailsComponent', () => {
  let component: AnnualDetailsComponent;
  let fixture: ComponentFixture<AnnualDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnualDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
