import { Component, OnInit, Input } from '@angular/core';

import { EventService } from '../services/event-service';

import { Event } from '../Event/event';

@Component({
    selector: 'app-day-component',
    templateUrl: 'day.component.html',
    styleUrls: [ 'day.component.css' ]
})
export class DayComponent implements OnInit {



    @Input()
    dayNum: number;

    events: Array<Event>;
    constructor(private eventService: EventService) {
        this.events = new Array<Event>();

        this.eventService.getUserDateEvents(1, '11-13-17').then(list => this.events = list);

        for (let event of this.events){
            console.log(event.title);
        }
        // this.events.push({
        //     eventId: 1,
        //     userId: 1,
        //     date: 'date 1',
        //     startTime: 0,
        //     endTime: 1,
        //     title: 'Test Title',
        //     description: 'Sample description'
        // });
        // this.events.push({
        //     eventId: 2,
        //     userId: 1,
        //     date: 'date 2',
        //     startTime: 0,
        //     endTime: 1,
        //     title: 'Test Title',
        //     description: 'Sample description'
        // });
        // this.events.push({
        //     eventId: 3,
        //     userId: 2,
        //     date: 'date 3',
        //     startTime: 0,
        //     endTime: 1,
        //     title: 'Test Title',
        //     description: 'Sample description'
        // });
        // this.events.push({
        //     eventId: 4,
        //     userId: 2,
        //     date: 'date 4',
        //     startTime: 0,
        //     endTime: 1,
        //     title: 'Test Title',
        //     description: 'Sample description'
        // });
    }

    ngOnInit(): void {
    }

    searchDays(input: string): void {
        console.log(input);
    }
}
