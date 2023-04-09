import { Component } from '@angular/core';

enum Month {
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
}

enum DoW {
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
}
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent {
  // create the calendar based on the current month (0 to 11) (consider leap years)
  // generate the days(TODO calDay component)

  dateToday = new Date();
  currYear = this.dateToday.getFullYear();
  month = Month[this.dateToday.getMonth()];
  dayOfWeek = DoW[this.dateToday.getDay()];

  lastDayOfMonth = new Date(
    this.currYear,
    this.dateToday.getMonth() + 1,
    0
  ).getDate();
  days = Array.from({ length: this.lastDayOfMonth }, (_, i) => i + 1);

  setInfo(): void {
    this.currYear = this.dateToday.getFullYear();
    this.month = Month[this.dateToday.getMonth()];
    this.dayOfWeek = DoW[this.dateToday.getDay()];
    this.lastDayOfMonth = new Date(
      this.currYear,
      this.dateToday.getMonth() + 1,
      0
    ).getDate();
    this.days = Array.from({ length: this.lastDayOfMonth }, (_, i) => i + 1);
  }

  genNextMonth(currDate: Date = this.dateToday) {
    let newDate;
    if (currDate.getMonth() === 11) {
      this.currYear += 1;
      this.dateToday = new Date(this.currYear, 0, 1);
    } else {
      this.dateToday = new Date(
        this.currYear,
        this.dateToday.getMonth() + 1,
        this.dateToday.getDate() + 1
      );
    }
    return this.setInfo();
  }
  genPrevMonth(currDate: Date = this.dateToday) {
    let newDate;
    if (currDate.getMonth() === 0) {
      this.currYear -= 1;
      this.dateToday = new Date(this.currYear, 11, 1);
    } else {
      this.dateToday = new Date(
        this.currYear,
        this.dateToday.getMonth() - 1,
        this.dateToday.getDate() - 1
      );
    }
    return this.setInfo();
  }
}
