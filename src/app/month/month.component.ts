import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-month-component',
    templateUrl: 'month.component.html',
    styleUrls: ['month.component.css']
})
export class MonthComponent implements OnInit {

    currentMonthTitle: string;
    daysInMonth: number = 1;
    monthDayArray: number[];

    @Input() currentMonthNum: number;
    @Input() currentYearNum: number;

    dayString: string;

    constructor() {
        this.monthDayArray = new Array();
    }

    ngOnInit() {
        // Return today's date and time
        const currentTime: Date = new Date();
        // returns the month (from 0 to 11)
        const month: number = currentTime.getMonth() + 1;
        // returns the day of the month (from 1 to 31)
        const day: number = currentTime.getDate();
        // returns the year (four digits)
        const year: number = currentTime.getFullYear();
        // write output MM/dd/yyyy
        console.log(month + '/' + day + '/' + year);
    }

    ngOnChanges() {
        this.monthDayArray = [];
        this.parseArray();
    }

    getWeekDay(num: number): string {
        switch(num){
            case 0: {
                return 'Sunday';
            }
            case 1: {
                return 'Monday';
            }
            case 2: {
                return 'Tuesday';
            }
            case 3: {
                return 'Wednesday';
            }
            case 4: {
                return 'Thursday';
            }
            case 5: {
                return 'Friday';
            }
            case 6: {
                return 'Saturday';
            }
        }
    }

    getCurrentYearTitle() {
        return this.currentYearNum;
    }


    getCurrentMonthTitle() {
        if (this.currentMonthNum == 1) {
            this.currentMonthTitle = "January";
        }
        else if (this.currentMonthNum == 2) {
            this.currentMonthTitle = "February";
        }
        else if (this.currentMonthNum == 3) {
            this.currentMonthTitle = "March";
        }
        else if (this.currentMonthNum == 4) {
            this.currentMonthTitle = "April";
        }
        else if (this.currentMonthNum == 5) {
            this.currentMonthTitle = "May";
        }
        else if (this.currentMonthNum == 6) {
            this.currentMonthTitle = "June";
        }
        else if (this.currentMonthNum == 7) {
            this.currentMonthTitle = "July";
        }
        else if (this.currentMonthNum == 8) {
            this.currentMonthTitle = "August";
        }
        else if (this.currentMonthNum == 9) {
            this.currentMonthTitle = "September";
        }
        else if (this.currentMonthNum == 10) {
            this.currentMonthTitle = "October";
        }
        else if (this.currentMonthNum == 11) {
            this.currentMonthTitle = "November";
        }
        else if (this.currentMonthNum == 12) {
            this.currentMonthTitle = "December";
        }
        return this.currentMonthTitle;
    }

    parseArray() {
        this.daysInMonth = howManyDaysInMonth(this.currentMonthNum, this.currentYearNum);
        var numberOfDaysPercedingFirstDay = new Date(this.currentYearNum + "-" + this.currentMonthNum).getDay()
        if (numberOfDaysPercedingFirstDay === 0) {
            numberOfDaysPercedingFirstDay = 7;
        }
        if (this.currentMonthNum > 9) {
            numberOfDaysPercedingFirstDay = (numberOfDaysPercedingFirstDay + 1);
        }
        for (let i = 0; i < 42; i++) {
            if (i < numberOfDaysPercedingFirstDay) {
                this.monthDayArray.push(0);
            }
            else if ((i - numberOfDaysPercedingFirstDay) < this.daysInMonth) {
                this.monthDayArray.push(i - numberOfDaysPercedingFirstDay + 1);
            }
            else {
                this.monthDayArray.push(0);
            }
        }
    }

    searchDays(input: string): void {
        console.log(input);
    }
}
function howManyDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}
