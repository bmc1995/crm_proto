import { Component } from '@angular/core';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styleUrls: ['./calendar-day.component.scss'],
})
export class CalendarDayComponent {
  constructor() {}

  date: dayjs.Dayjs = dayjs();
  startOfDay: dayjs.Dayjs = dayjs().startOf('d');

  hours = [
    {
      time: '12:00 AM',
      slots: [
        { start: '00:00', title: '' },
        { start: '00:15', title: '' },
        { start: '00:30', title: '' },
        { start: '00:45', title: '' },
      ],
    },
    {
      time: '1:00 AM',
      slots: [
        { start: '01:00', title: '' },
        { start: '01:15', title: '' },
        { start: '01:30', title: '' },
        { start: '01:45', title: '' },
      ],
    },
    {
      time: '2:00 AM',
      slots: [
        { start: '02:00', title: '' },
        { start: '02:15', title: '' },
        { start: '02:30', title: '' },
        { start: '02:45', title: '' },
      ],
    },
    {
      time: '3:00 AM',
      slots: [
        { start: '03:00', title: '' },
        { start: '03:15', title: '' },
        { start: '03:30', title: '' },
        { start: '03:45', title: '' },
      ],
    },
    {
      time: '4:00 AM',
      slots: [
        { start: '04:00', title: '' },
        { start: '04:15', title: '' },
        { start: '04:30', title: '' },
        { start: '04:45', title: '' },
      ],
    },
    {
      time: '5:00 AM',
      slots: [
        { start: '05:00', title: '' },
        { start: '05:15', title: '' },
        { start: '05:30', title: '' },
        { start: '05:45', title: '' },
      ],
    },
    {
      time: '6:00 AM',
      slots: [
        { start: '06:00', title: '' },
        { start: '06:15', title: '' },
        { start: '06:30', title: '' },
        { start: '06:45', title: '' },
      ],
    },
    {
      time: '7:00 AM',
      slots: [
        { start: '07:00', title: '' },
        { start: '07:15', title: '' },
        { start: '07:30', title: '' },
        { start: '07:45', title: '' },
      ],
    },
    {
      time: '8:00 AM',
      slots: [
        { start: '08:00', title: '' },
        { start: '08:15', title: '' },
        { start: '08:30', title: '' },
        { start: '08:45', title: '' },
      ],
    },
    {
      time: '9:00 AM',
      slots: [
        { start: '09:00', title: '' },
        { start: '09:15', title: '' },
        { start: '09:30', title: '' },
        { start: '09:45', title: '' },
      ],
    },
    {
      time: '10:00 AM',
      slots: [
        { start: '10:00', title: '' },
        { start: '10:15', title: '' },
        { start: '10:30', title: '' },
        { start: '10:45', title: '' },
      ],
    },
    {
      time: '11:00 AM',
      slots: [
        { start: '11:00', title: '' },
        { start: '11:15', title: '' },
        { start: '11:30', title: '' },
        { start: '11:45', title: '' },
      ],
    },
    {
      time: '12:00 PM',
      slots: [
        { start: '12:00', title: '' },
        { start: '12:15', title: '' },
        { start: '12:30', title: '' },
        { start: '12:45', title: '' },
      ],
    },
    {
      time: '1:00 PM',
      slots: [
        { start: '13:00', title: '' },
        { start: '13:15', title: '' },
        { start: '13:30', title: '' },
        { start: '13:45', title: '' },
      ],
    },
    {
      time: '2:00 PM',
      slots: [
        { start: '14:00', title: '' },
        { start: '14:15', title: '' },
        { start: '14:30', title: '' },
        { start: '14:45', title: '' },
      ],
    },
    {
      time: '3:00 PM',
      slots: [
        { start: '15:00', title: '' },
        { start: '15:15', title: '' },
        { start: '15:30', title: '' },
        { start: '15:45', title: '' },
      ],
    },
    {
      time: '4:00 PM',
      slots: [
        { start: '16:00', title: '' },
        { start: '16:15', title: '' },
        { start: '16:30', title: '' },
        { start: '16:45', title: '' },
      ],
    },
    {
      time: '5:00 PM',
      slots: [
        { start: '17:00', title: '' },
        { start: '17:15', title: '' },
        { start: '17:30', title: '' },
        { start: '17:45', title: '' },
      ],
    },
    {
      time: '6:00 PM',
      slots: [
        { start: '18:00', title: '' },
        { start: '18:15', title: '' },
        { start: '18:30', title: '' },
        { start: '18:45', title: '' },
      ],
    },
    {
      time: '7:00 PM',
      slots: [
        { start: '19:00', title: '' },
        { start: '19:15', title: '' },
        { start: '19:30', title: '' },
        { start: '19:45', title: '' },
      ],
    },
    {
      time: '8:00 PM',
      slots: [
        { start: '20:00', title: '' },
        { start: '20:15', title: '' },
        { start: '20:30', title: '' },
        { start: '20:45', title: '' },
      ],
    },
    {
      time: '9:00 PM',
      slots: [
        { start: '21:00', title: '' },
        { start: '21:15', title: '' },
        { start: '21:30', title: '' },
        { start: '21:45', title: '' },
      ],
    },
    {
      time: '10:00 PM',
      slots: [
        { start: '22:00', title: '' },
        { start: '22:15', title: '' },
        { start: '22:30', title: '' },
        { start: '22:45', title: '' },
      ],
    },
    {
      time: '11:00 PM',
      slots: [
        { start: '23:00', title: '' },
        { start: '23:15', title: '' },
        { start: '23:30', title: '' },
        { start: '23:45', title: '' },
      ],
    },
  ];
}
