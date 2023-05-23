import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { CalendarDayComponent } from './calendar-day/calendar-day.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [CalendarComponent, CalendarDayComponent],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    MatGridListModule,
    MatChipsModule,
    MatCardModule,
  ],
})
export class CalendarModule {}
