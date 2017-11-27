import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DayComponent } from './day/day.component';
import { MonthComponent } from './month/month.component';
import { CalendarComponent } from './calendar/calendar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { EventService } from './services/event-service';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    MonthComponent,
    DayComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpModule,
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
