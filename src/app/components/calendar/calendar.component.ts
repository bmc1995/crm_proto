import { DOCUMENT } from '@angular/common';
import {
  Component,
  EventEmitter,
  Inject,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { CalendarView, CalendarEvent } from 'angular-calendar';
import { subDays, startOfDay, addDays, parseISO } from 'date-fns';
import { Observable, Subscription } from 'rxjs';
import { CalendarService } from 'src/app/services/calendar.service';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

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
  viewDate: Date = new Date();
  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'A 3 day event',
      color: { ...colors.red },
      allDay: true,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
  ];
  viewDateChange = new EventEmitter<Date>();
  viewChange = new EventEmitter<CalendarView>();

  CalendarView = CalendarView;
  view: CalendarView = CalendarView.Month;

  locale: string = 'en';

  private readonly darkThemeClass = 'dark-theme';

  changeDay(date: Date) {
    this.viewDate = date;
    this.view = CalendarView.Day;
  }

  ngOnInit(): void {
    this.document.body.classList.add(this.darkThemeClass);
    this.viewChange.subscribe((val) => {
      this.view = val;
    });

    this.calService.getEvents().subscribe((e) => {
      console.log(e);

      this.events = e.map((ev) => {
        ev.start = parseISO(new Date(ev.start).toISOString());
        ev.end ? (ev.end = parseISO(new Date(ev.end).toISOString())) : null;
        return ev;
      });
    });
  }

  ngOnDestroy(): void {
    this.document.body.classList.remove(this.darkThemeClass);
    this.viewChange.unsubscribe();
  }
}
