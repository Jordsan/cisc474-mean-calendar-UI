import { Component, OnInit, Input } from '@angular/core';

import { EventService } from '../services/event-service';

import { Event } from '../Event/event';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'app-day-component',
    templateUrl: 'day.component.html',
    styleUrls: ['day.component.css']
})
export class DayComponent implements OnInit, OnChanges {


    @Input()
    dayNum: number;

    @Input()
    monthNum: number;

    @Input()
    yearNum: number;

    dayDate: string;

    userId: number = 1;

    events: Array<Event>;
    constructor(private eventService: EventService) {
        this.events = new Array<Event>();

    }

    ngOnInit(): void {
        this.dayDate = this.monthNum + '-' + this.dayNum + '-' + this.yearNum;

        console.log("daydate -> " + this.dayDate);

        this.eventService.getUserDateEvents(this.userId, this.dayDate).then(list => this.events = list);

        // for (let event of this.events) {
        //     console.log(event.title);
        // }

    }

    ngOnChanges(): void {
        this.dayDate = this.monthNum + '-' + this.dayNum + '-' + this.yearNum;

        console.log("daydate -> " + this.dayDate);

        this.eventService.getUserDateEvents(this.userId, this.dayDate).then(list => this.events = list);
    }

    searchDays(input: string): void {
        console.log(input);
    }
}
