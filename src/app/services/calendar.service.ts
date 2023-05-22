import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CalendarEvent } from '../shared/interfaces/calendar';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  constructor(private http: HttpClient) {}

  getEvents = this.http.get<CalendarEvent[]>('http://localhost:3000/events');
}
