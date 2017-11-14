import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DayComponent } from './day/day.component';
import { MonthComponent } from './month/month.component';
import { CalendarComponent } from './calendar/calendar.component';


@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    MonthComponent,
    DayComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
