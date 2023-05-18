import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekdaySectionComponent } from './weekday-section.component';

describe('WeekdaySectionComponent', () => {
  let component: WeekdaySectionComponent;
  let fixture: ComponentFixture<WeekdaySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekdaySectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeekdaySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
