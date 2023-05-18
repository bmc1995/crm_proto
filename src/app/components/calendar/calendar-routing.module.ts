import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar.component';
import { WeekViewComponent } from './week-view/week-view.component';

const routes: Routes = [
  { path: '', component: CalendarComponent },
  { path: 'week', component: WeekViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarRoutingModule {}
