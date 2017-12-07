import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { EventService } from '../services/event-service';

import { Event } from '../event/event';

@Component({
    selector: 'app-day-component',
    templateUrl: 'day.component.html',
    styleUrls: ['day.component.css']
})
export class DayComponent implements OnChanges, OnInit {


    @Input()
    dayNum: number;

    @Input()
    monthNum: number;

    @Input()
    yearNum: number;

    @Input()
    weekday: number;

    dayDate: string;

    @Input()
    userId: number;

    events: Array<Event>;

    @Input()
    eventList: Event[];

    dayEvents: Event[];

    constructor(private eventService: EventService, private route: ActivatedRoute) {
        this.events = new Array<Event>();

        // this.route.paramMap.switchMap((params: ParamMap) =>
        //     params.get('id')).subscribe(id => this.userId = parseInt(id, 10));
    }

    ngOnInit(): void {
 
    }

    ngOnChanges(): void {
        this.dayEvents = new Array<Event>();

        let monthNumStr = this.monthNum.toString();
        let dayNumStr = this.dayNum.toString();

        if (this.monthNum < 10) {
            monthNumStr = '0' + this.monthNum.toString();
        }
        if (this.dayNum < 10) {
            dayNumStr = '0' + this.dayNum.toString();
        }

        this.dayDate = this.yearNum  + '-' + monthNumStr + '-' + dayNumStr;

        for (const event of this.eventList) {
            if (event.date === this.dayDate) {
                this.dayEvents.push(event);
            }
        }
    }

    getMonth() {
        if (this.monthNum === 1) {
            return 'January';
        }
        else if (this.monthNum === 2) {
            return 'February';
        }
        else if (this.monthNum === 3) {
            return 'March';
        }
        else if (this.monthNum === 4) {
            return 'April';
        }
        else if (this.monthNum === 5) {
            return 'May';
        }
        else if (this.monthNum === 6) {
            return 'June';
        }
        else if (this.monthNum === 7) {
            return 'July';
        }
        else if (this.monthNum === 8) {
            return 'August';
        }
        else if (this.monthNum === 9) {
            return 'September';
        }
        else if (this.monthNum === 10) {
            return 'October';
        }
        else if (this.monthNum === 11) {
            return 'November';
        }
        else if (this.monthNum === 12) {
            return 'December';
        }
    }

    getWeekday(): string {
        switch (this.weekday) {
            case 1: {
                return 'Sunday';
            }
            case 2: {
                return 'Monday';
            }
            case 3: {
                return 'Tuesday';
            }
            case 4: {
                return 'Wednesday';
            }
            case 5: {
                return 'Thursday';
            }
            case 6: {
                return 'Friday';
            }
            case 7: {
                return 'Saturday';
            }
        }
    }

    addColon(input: number): string {
        let pm = false;
        let output = '';

        if (input <= 59) {
            input += 1200;
        }
        else if (input >= 1300) {
            pm = true;
            input -= 1200;
        }
        else if (input >= 1200) {
            pm = true;
        }


        const inputStr = input.toString();
        if (inputStr.length === 3) {
            if (pm) {
                output = inputStr.substr(0, 1) + ':' + inputStr.substr(1) + ' PM';
            }
            else {
                output = inputStr.substr(0, 1) + ':' + inputStr.substr(1) + ' AM';
            }
        }
        else if (inputStr.length === 4) {
            if (pm) {
                output = inputStr.substr(0, 2) + ':' + inputStr.substr(2) + ' PM';
            }
            else {
                output = inputStr.substr(0, 2) + ':' + inputStr.substr(2) + ' AM';
            }
        }
        return output;
    }

}
