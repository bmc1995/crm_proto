import { DOCUMENT } from '@angular/common';
import {
  Component,
  EventEmitter,
  Inject,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { CalendarView, CalendarEvent } from 'angular-calendar';
import * as dayjs from 'dayjs';
import * as toObject from 'dayjs/plugin/toObject';
import { Observable, Subscription } from 'rxjs';
import { CalendarService } from 'src/app/services/calendar.service';
import { DaysOfWeek } from 'src/app/shared/enums/days-of-week';
import {
  CalendarDay,
  CalendarDayOptions,
  // CalendarEvent,
} from 'src/app/shared/interfaces/calendar';

dayjs.extend(toObject);

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CalendarComponent implements OnInit, OnDestroy {
  constructor(
    private calService: CalendarService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  view: CalendarView = CalendarView.Month;

  viewDate: Date = new Date();

  events: CalendarEvent[] = [];
  viewDateChange = new EventEmitter<Date>();
  viewChange = new EventEmitter<CalendarView>();
  CalendarView = CalendarView;
  locale: string = 'en';

  private readonly darkThemeClass = 'dark-theme';

  changeDay(date: Date) {
    this.viewDate = date;
    this.view = CalendarView.Day;
  }

  ngOnInit(): void {
    this.document.body.classList.add(this.darkThemeClass);
  }

  ngOnDestroy(): void {
    this.document.body.classList.remove(this.darkThemeClass);
  }

  // currDate = dayjs();
  // viewDate: dayjs.Dayjs = this.currDate.clone();
  // events: any[] = [];

  // currentDateObj = {
  //   currMonth: this.currDate.month(),
  //   currDay: this.currDate.date(),
  //   currYear: this.currDate.year(),
  //   currMonthName: this.currDate.format('MMMM'),
  //   currDayName: this.currDate.format('dddd'),
  // };
  // //temp impl
  // viewDateObj = {
  //   viewMonth: this.viewDate.month(),
  //   viewDay: this.viewDate.date(),
  //   viewYear: this.viewDate.year(),
  //   viewMonthName: this.viewDate.format('MMMM'),
  //   viewDayName: this.viewDate.format('dddd'),
  // };
  // ngOnInit(): void {
  //   this.calService.getEvents.subscribe((e) =>
  //     e.map((calEvent) => this.events.push(calEvent))
  //   );
  //   console.log(this.events);
  // }
  // updateDateObj() {
  //   this.viewDateObj = {
  //     viewMonth: this.viewDate.month(),
  //     viewDay: this.viewDate.date(),
  //     viewYear: this.viewDate.year(),
  //     viewMonthName: this.viewDate.format('MMMM'),
  //     viewDayName: this.viewDate.format('dddd'),
  //   };
  // }
  // daysInMonth = this.viewDate.daysInMonth();
  // calendar: CalendarDay[] = this.createCalendar();

  // createCalDay(
  //   day: number,
  //   date: dayjs.Dayjs,
  //   options: CalendarDayOptions
  // ): CalendarDay {
  //   return {
  //     day,
  //     dayName: dayjs(`${date.month() + 1}/${day}/${date.year()}`).format(
  //       'dddd'
  //     ),
  //     options,
  //   };
  // }

  // createCalEvent(
  //   day: number,
  //   month: string,
  //   year: string,
  //   time: number,
  //   note: string
  // ): CalendarEvent {
  //   return { date: new Date(), day, month, year, time, note };
  // }
  // arrangeCalendar(viewDate: dayjs.Dayjs, cal: CalendarDay[]) {
  //   const { dayName } = cal[0];

  //   const tempDate = viewDate.clone();
  //   const prevMonth = tempDate.set('month', tempDate.month() - 1).clone();

  //   // zero-based
  //   const genDiff = (dayOfWeek: number) =>
  //     [...Array(dayOfWeek)].forEach((_, i) =>
  //       cal.unshift(
  //         this.createCalDay(prevMonth.daysInMonth() - i, prevMonth, {
  //           events: [],
  //           disabled: true,
  //         })
  //       )
  //     );

  //   if (dayName !== DaysOfWeek[0]) {
  //     genDiff(DaysOfWeek[dayName as keyof typeof DaysOfWeek]);
  //   }
  // }

  // createCalendar() {
  //   const calendarDays = new Array(this.daysInMonth).fill({});

  //   const calendar = calendarDays.map((_, i) => {
  //     return this.createCalDay(i + 1, this.viewDate, {
  //       events: [
  //         this.createCalEvent(
  //           i + 1,
  //           this.viewDate.format('MMMM'),
  //           this.viewDate.year().toString(),
  //           1430,
  //           'This is test event ' + i
  //         ),
  //         this.createCalEvent(
  //           i + 1,
  //           this.viewDate.format('MMMM'),
  //           this.viewDate.year().toString(),
  //           1430,
  //           'This is test event ' + i
  //         ),
  //         this.createCalEvent(
  //           i + 1,
  //           this.viewDate.format('MMMM'),
  //           this.viewDate.year().toString(),
  //           1430,
  //           'This is test event ' + i
  //         ),
  //       ],
  //     });
  //   });

  //   this.arrangeCalendar(this.viewDate, calendar);

  //   return calendar;
  // }

  // changeCalendarView(month: number = this.currentDateObj.currMonth) {
  //   this.viewDate = this.viewDate.set('date', 1);
  //   this.viewDate = this.viewDate.set('month', month);
  //   console.log(this.viewDate);

  //   this.daysInMonth = this.viewDate.daysInMonth();
  //   this.updateDateObj();

  //   this.calendar = this.createCalendar();
  // }
}
