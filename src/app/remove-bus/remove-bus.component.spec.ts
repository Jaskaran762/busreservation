import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveBusComponent } from './remove-bus.component';

describe('RemoveBusComponent', () => {
  let component: RemoveBusComponent;
  let fixture: ComponentFixture<RemoveBusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveBusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
