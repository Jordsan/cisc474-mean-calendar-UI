import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-calendar-component',
    templateUrl: 'calendar.component.html',
    styleUrls: [ 'calendar.component.css' ]
})
export class CalendarComponent implements OnInit {

    whatMonth: number = 1;
    whatYear: number = 2017


    constructor() {
    }

    getCurrentYear(){
      return this.whatYear
    }

    getCurrentMonth(){
      return this.whatMonth;
    }

    getPreviousMonth(){
      if(this.whatMonth == 1){
        this.whatYear = this.whatYear - 1;
        this.whatMonth = 12;
      }
      else{
        this.whatMonth = this.whatMonth - 1;
      }
      console.log(this.whatMonth);
    }

    getNextMonth(){
      if(this.whatMonth == 12){
        this.whatYear = this.whatYear + 1;
        this.whatMonth = 1;
      }
      else{
        this.whatMonth = this.whatMonth + 1;
      }
      console.log(this.whatMonth);
    }

    ngOnInit(): void {
    }

    searchDays(input: string): void {
        console.log(input);
    }
}
