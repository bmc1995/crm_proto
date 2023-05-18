import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weekday-section',
  templateUrl: './weekday-section.component.html',
  styleUrls: ['./weekday-section.component.scss'],
})
export class WeekdaySectionComponent {
  constructor() {}

  @Input() weekday!: string;
}
