import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-month-component',
    templateUrl: 'month.component.html',
    styleUrls: [ 'month.component.css' ]
})
export class MonthComponent implements OnInit {

    @Input()
    monthNum: number;

    constructor() {
    }

    ngOnInit(): void {
    }

    searchDays(input: string): void {
        console.log(input);
    }
}
