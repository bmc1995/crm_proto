import { Component } from '@angular/core';
import * as dayjs from 'dayjs';
import * as toObject from 'dayjs/plugin/toObject';
import { Observable } from 'rxjs';
import { DaysOfWeek } from 'src/app/shared/enums/days-of-week';
import {
  CalendarDay,
  CalendarDayOptions,
  CalendarEvent,
} from 'src/app/shared/interfaces/calendar';

dayjs.extend(toObject);

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent {
  constructor() {}
  currDate = dayjs();
  viewDate: dayjs.Dayjs = this.currDate.clone();

  currentDateObj = {
    currMonth: this.currDate.month(),
    currDay: this.currDate.date(),
    currYear: this.currDate.year(),
    currMonthName: this.currDate.format('MMMM'),
    currDayName: this.currDate.format('dddd'),
  };
  //temp impl
  viewDateObj = {
    viewMonth: this.viewDate.month(),
    viewDay: this.viewDate.date(),
    viewYear: this.viewDate.year(),
    viewMonthName: this.viewDate.format('MMMM'),
    viewDayName: this.viewDate.format('dddd'),
  };
  updateDateObj() {
    this.viewDateObj = {
      viewMonth: this.viewDate.month(),
      viewDay: this.viewDate.date(),
      viewYear: this.viewDate.year(),
      viewMonthName: this.viewDate.format('MMMM'),
      viewDayName: this.viewDate.format('dddd'),
    };
  }
  daysInMonth = this.viewDate.daysInMonth();
  calendar: CalendarDay[] = this.createCalendar();

  createCalDay(
    day: number,
    date: dayjs.Dayjs,
    options: CalendarDayOptions
  ): CalendarDay {
    return {
      day,
      dayName: dayjs(`${date.month() + 1}/${day}/${date.year()}`).format(
        'dddd'
      ),
      options,
    };
  }

  createCalEvent(
    day: number,
    month: string,
    year: string,
    time: number,
    note: string
  ): CalendarEvent {
    return { date: new Date(), day, month, year, time, note };
  }
  arrangeCalendar(viewDate: dayjs.Dayjs, cal: CalendarDay[]) {
    const { dayName } = cal[0];

    const tempDate = viewDate.clone();
    const prevMonth = tempDate.set('month', tempDate.month() - 1).clone();

    // zero-based
    const genDiff = (dayOfWeek: number) =>
      [...Array(dayOfWeek)].forEach((_, i) =>
        cal.unshift(
          this.createCalDay(prevMonth.daysInMonth() - i, prevMonth, {
            events: [],
            disabled: true,
          })
        )
      );

    if (dayName !== DaysOfWeek[0]) {
      genDiff(DaysOfWeek[dayName as keyof typeof DaysOfWeek]);
    }
  }

  createCalendar() {
    const calendarDays = new Array(this.daysInMonth).fill({});

    const calendar = calendarDays.map((_, i) => {
      return this.createCalDay(i + 1, this.viewDate, {
        events: [
          this.createCalEvent(
            i + 1,
            this.viewDate.format('MMMM'),
            this.viewDate.year().toString(),
            1430,
            'This is test event ' + i
          ),
          this.createCalEvent(
            i + 1,
            this.viewDate.format('MMMM'),
            this.viewDate.year().toString(),
            1430,
            'This is test event ' + i
          ),
          this.createCalEvent(
            i + 1,
            this.viewDate.format('MMMM'),
            this.viewDate.year().toString(),
            1430,
            'This is test event ' + i
          ),
        ],
      });
    });

    this.arrangeCalendar(this.viewDate, calendar);

    return calendar;
  }

  changeCalendarView(month: number = this.currentDateObj.currMonth) {
    this.viewDate = this.viewDate.set('date', 1);
    this.viewDate = this.viewDate.set('month', month);
    console.log(this.viewDate);

    this.daysInMonth = this.viewDate.daysInMonth();
    this.updateDateObj();

    this.calendar = this.createCalendar();
  }
}