import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-month-component',
    templateUrl: 'month.component.html',
    styleUrls: [ 'month.component.css' ]
})
export class MonthComponent implements OnInit {

    monthTitle: string;

    @Input()
    monthNum: number;

    getMonthTitle(){
      if(this.monthNum == 1){
        this.monthTitle = "January"
      }
      else if(this.monthNum==2){
        this.monthTitle = "February"
      }
      else if(this.monthNum==3){
        this.monthTitle = "March"
      }
      else if(this.monthNum==4){
        this.monthTitle = "April"
      }
      else if(this.monthNum==5){
        this.monthTitle = "May"
      }
      else if(this.monthNum==6){
        this.monthTitle = "June"
      }
      else if(this.monthNum==7){
        this.monthTitle = "July"
      }
      else if(this.monthNum==8){
        this.monthTitle = "August"
      }
      else if(this.monthNum==9){
        this.monthTitle = "September"
      }
      else if(this.monthNum==10){
        this.monthTitle = "October"
      }
      else if(this.monthNum==11){
        this.monthTitle = "November"
      }
      else if(this.monthNum==12){
        this.monthTitle = "December"
      }
      return this.monthTitle;

    }

    constructor() {
    }

    ngOnInit(): void {
    }

    searchDays(input: string): void {
        console.log(input);
    }
}
