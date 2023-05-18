import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Activity } from '../models/activity.model';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  activities: Activity[] = [
    {
      id: 1,
      type: 'Phone Call',
      date: new Date('2023-04-10T13:00:00Z'),
      description: 'Discussed new product features with customer',
      contactId: 1,
    },
    {
      id: 2,
      type: 'Email',
      date: new Date('2023-04-09T15:30:00Z'),
      description: 'Sent proposal to lead',
      contactId: 3,
    },
    {
      id: 3,
      type: 'Meeting',
      date: new Date('2023-04-08T10:00:00Z'),
      description: 'Met with customer to discuss contract renewal',
      contactId: 1,
    },
    // more activities...
  ];

  constructor() {}

  getActivities(): Observable<Activity[]> {
    return of(this.activities);
  }
}
