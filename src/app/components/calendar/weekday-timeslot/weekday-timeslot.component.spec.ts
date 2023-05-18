import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekdayTimeslotComponent } from './weekday-timeslot.component';

describe('WeekdayTimeslotComponent', () => {
  let component: WeekdayTimeslotComponent;
  let fixture: ComponentFixture<WeekdayTimeslotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekdayTimeslotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeekdayTimeslotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
