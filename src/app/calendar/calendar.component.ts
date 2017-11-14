import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-calendar-component',
    templateUrl: 'calendar.component.html',
    styleUrls: [ 'calendar.component.css' ]
})
export class CalendarComponent implements OnInit {
    constructor() {
    }

    ngOnInit(): void {
    }

    searchDays(input: string): void {
        console.log(input);
    }
}
