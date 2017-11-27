import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { PopoverModule } from 'ngx-bootstrap/popover';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DayComponent } from './day/day.component';
import { MonthComponent } from './month/month.component';
import { CalendarComponent } from './calendar/calendar.component';

import { EventService } from './services/event-service';


@NgModule({
    declarations: [
        AppComponent,
        CalendarComponent,
        MonthComponent,
        DayComponent
    ],
    imports: [
        PopoverModule.forRoot(),
        BrowserModule,
        AppRoutingModule,
        HttpModule
    ],
    providers: [EventService],
    bootstrap: [AppComponent]
})
export class AppModule { }
