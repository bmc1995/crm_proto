export interface CalendarEvent {
  //start : {
  year: string;
  month: string;
  day: number;
  time: number;
  // }  & remove date property/key?

  /*end: {
      year: string;
      month: string;
      day: number;
      time: number;
    }
  */
  note: string;
  date: Date;
}

export interface CalendarDayOptions {
  events: CalendarEvent[] | [];
  disabled?: boolean;
}

export interface CalendarDay {
  day: number;
  dayName: string;
  options: CalendarDayOptions;
}
