import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weekday-timeslot',
  templateUrl: './weekday-timeslot.component.html',
  styleUrls: ['./weekday-timeslot.component.scss'],
})
export class WeekdayTimeslotComponent {
  constructor() {}

  @Input() title: string = 'event title';
  @Input() start: string = 'start time';
  @Input() end: string = 'end time';
  @Input() allDay: boolean = false;
}
