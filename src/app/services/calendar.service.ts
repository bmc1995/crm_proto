import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  constructor(private http: HttpClient) {}

  getEvents(): Observable<CalendarEvent[]> {
    return this.http.get<CalendarEvent[]>('http://localhost:3000/event');
  }
}
