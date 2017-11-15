import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-calendar-component',
    templateUrl: 'calendar.component.html',
    styleUrls: [ 'calendar.component.css' ]
})
export class CalendarComponent implements OnInit {

    whatmonth: number = 1;


    constructor() {
    }

    getcurrentmonth(){
      return this.whatmonth;
    }

    previousmonth(){
      if(this.whatmonth == 1){
        this.whatmonth = 12;
      }
      else{
        this.whatmonth = this.whatmonth - 1;
      }
      console.log(this.whatmonth);
    }

    nextmonth(){
      if(this.whatmonth == 12){
        this.whatmonth = 1;
      }
      else{
        this.whatmonth = this.whatmonth + 1;
      }
      console.log(this.whatmonth);
    }

    ngOnInit(): void {
    }

    searchDays(input: string): void {
        console.log(input);
    }
}
