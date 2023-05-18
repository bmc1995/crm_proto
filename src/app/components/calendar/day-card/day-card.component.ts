import { Component, Input } from '@angular/core';
import { CalendarEvent } from 'src/app/shared/interfaces/calendar';

@Component({
  selector: 'app-day-card',
  templateUrl: './day-card.component.html',
  styleUrls: ['./day-card.component.scss'],
})
export class DayCardComponent {
  @Input() day!: number;
  @Input() events: CalendarEvent[] = [];
}
