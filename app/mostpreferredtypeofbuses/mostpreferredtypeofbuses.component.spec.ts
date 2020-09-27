import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostpreferredtypeofbusesComponent } from './mostpreferredtypeofbuses.component';

describe('MostpreferredtypeofbusesComponent', () => {
  let component: MostpreferredtypeofbusesComponent;
  let fixture: ComponentFixture<MostpreferredtypeofbusesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostpreferredtypeofbusesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostpreferredtypeofbusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
