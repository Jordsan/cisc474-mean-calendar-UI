import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-calendar-component',
    templateUrl: 'calendar.component.html',
    styleUrls: [ 'calendar.component.css' ]
})
export class CalendarComponent implements OnInit {

    currentMonth: number = 2;
    currentYear: number = 2017;
    daysInMonth: number;

    constructor() {
    }

    getCurrentYear(){
      return this.currentYear
    }

    getCurrentMonth(){
      return this.currentMonth;
    }

    getPreviousMonth(){
      if(this.currentMonth == 1){
        this.currentYear = this.currentYear - 1;
        this.currentMonth = 12;
      }
      else{
        this.currentMonth = this.currentMonth - 1;
      }
      this.daysInMonth = howManyDaysInMonth(this.currentMonth,this.currentYear);
      var numberOfDaysPercedingFirstDay = new Date(this.currentYear + "-" + this.currentMonth).getDay()
      console.log("YEAR = "+this.currentYear+"   MONTH = "+this.currentMonth+"  DAYS = "+this.daysInMonth+"   Padding = "+numberOfDaysPercedingFirstDay);
    }

    getNextMonth(){
      if(this.currentMonth == 12){
        this.currentYear = this.currentYear + 1;
        this.currentMonth = 1;
      }
      else{
        this.currentMonth = this.currentMonth + 1;
      }
      this.daysInMonth = howManyDaysInMonth(this.currentMonth,this.currentYear);
      var numberOfDaysPercedingFirstDay = new Date(this.currentYear + "-" + this.currentMonth).getDay()
      console.log("YEAR = "+this.currentYear+"   MONTH = "+this.currentMonth+"  DAYS = "+this.daysInMonth+"   Padding = "+numberOfDaysPercedingFirstDay);
    }

    ngOnInit(): void {
    }

    searchDays(input: string): void {
        console.log(input);
    }
}
function howManyDaysInMonth(month,year) {
    return new Date(year, month, 0).getDate();
}
