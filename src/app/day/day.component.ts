import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { EventService } from '../services/event-service';

<<<<<<< HEAD
import { Event } from '../Event/event';
=======
import { Event } from '../event/event';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
>>>>>>> b9c0e92da151c81958b68e31497d6028f838c0c2

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

    // from login service
    userId: number;

    events: Array<Event>;

    constructor(private eventService: EventService, private route: ActivatedRoute) {
        this.events = new Array<Event>();

        this.route.paramMap.switchMap((params: ParamMap) =>
            params.get('id')).subscribe(id => this.userId = parseInt(id, 10));
    }

    ngOnInit(): void {

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
