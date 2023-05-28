import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { DateAdapter, CalendarModule as CalLibModule } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarHeaderComponent } from './calendar-header/calendar-header.component';

@NgModule({
  declarations: [CalendarComponent, CalendarHeaderComponent],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    CalLibModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    MatGridListModule,
    MatChipsModule,
    MatCardModule,
  ],
})
export class CalendarModule {}
