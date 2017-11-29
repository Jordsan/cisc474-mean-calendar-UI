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

    @Input()
    weekday: number;

    dayDate: string;

    userId: number = 1;

    events: Array<Event>;
    constructor(private eventService: EventService) {
        this.events = new Array<Event>();

    }

    ngOnInit(): void {

        // this.dayDate = this.monthNum + '-' + this.dayNum + '-' + this.yearNum;
        // this.eventService.getUserDateEvents(this.userId, this.dayDate).then(list => this.events = list);

    }

    ngOnChanges(): void {
        this.dayDate = this.monthNum + '-' + this.dayNum + '-' + this.yearNum;

        this.eventService.getUserDateEvents(this.userId, this.dayDate).then(list => this.events = list);
    }

    searchDays(input: string): void {
        console.log(input);
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
