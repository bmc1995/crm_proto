import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';
import { DayCardComponent } from './day-card/day-card.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { WeekViewComponent } from './week-view/week-view.component';
import { WeekdaySectionComponent } from './weekday-section/weekday-section.component';
import { WeekdayTimeslotComponent } from './weekday-timeslot/weekday-timeslot.component';
import { DayViewComponent } from './day-view/day-view.component';

@NgModule({
  declarations: [CalendarComponent, DayCardComponent, WeekViewComponent, WeekdaySectionComponent, WeekdayTimeslotComponent, DayViewComponent],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    MatGridListModule,
    MatChipsModule,
  ],
})
export class CalendarModule {}
