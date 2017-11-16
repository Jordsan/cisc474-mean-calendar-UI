import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-month-component',
    templateUrl: 'month.component.html',
    styleUrls: [ 'month.component.css' ]
})
export class MonthComponent implements OnInit {

    currentMonthTitle: string;
    daysInMonth: number = 1;
    monthDayArray: number[];
    previousMonthNumber: number;

    @Input() currentMonthNum: number;
    @Input() currentYearNum: number;

    constructor() {
      this.monthDayArray = new Array();
    }

    ngOnInit(){
    }

    ngOnChanges(){
      this.monthDayArray=[]
      this.parseArray();
    }

    getCurrentYearTitle(){
      return this.currentYearNum;
    }


    getCurrentMonthTitle(){
      if(this.currentMonthNum==1){
        this.previousMonthNumber=12;
      }
      else{
        this.previousMonthNumber=this.currentMonthNum-1;
      }
      if(this.currentMonthNum == 1){
        this.currentMonthTitle = "January"
      }
      else if(this.currentMonthNum==2){
        this.currentMonthTitle = "February"
      }
      else if(this.currentMonthNum==3){
        this.currentMonthTitle = "March"
      }
      else if(this.currentMonthNum==4){
        this.currentMonthTitle = "April"
      }
      else if(this.currentMonthNum==5){
        this.currentMonthTitle = "May"
      }
      else if(this.currentMonthNum==6){
        this.currentMonthTitle = "June"
      }
      else if(this.currentMonthNum==7){
        this.currentMonthTitle = "July"
      }
      else if(this.currentMonthNum==8){
        this.currentMonthTitle = "August"
      }
      else if(this.currentMonthNum==9){
        this.currentMonthTitle = "September"
      }
      else if(this.currentMonthNum==10){
        this.currentMonthTitle = "October"
      }
      else if(this.currentMonthNum==11){
        this.currentMonthTitle = "November"
      }
      else if(this.currentMonthNum==12){
        this.currentMonthTitle = "December"
      }
      return this.currentMonthTitle;
    }

    parseArray(){
      this.daysInMonth = howManyDaysInMonth(this.currentMonthNum,this.currentYearNum);
      var numberOfDaysPercedingFirstDay = new Date(this.currentYearNum + "-" + this.currentMonthNum).getDay()
      console.log("pre days" + numberOfDaysPercedingFirstDay);
      if(numberOfDaysPercedingFirstDay===0){
        numberOfDaysPercedingFirstDay=7;
      }
      if(this.currentMonthNum>9){
        numberOfDaysPercedingFirstDay=(numberOfDaysPercedingFirstDay+1);
      }
      for(let i=0; i < 42; i++){
        if (i < numberOfDaysPercedingFirstDay){
          this.monthDayArray.push(0);
        }
        else if ((i-numberOfDaysPercedingFirstDay)<this.daysInMonth){
          this.monthDayArray.push(i-numberOfDaysPercedingFirstDay+1);
        }
        else{
          this.monthDayArray.push(0);
        }
      }
      console.log(this.monthDayArray);
    }

    searchDays(input: string): void {
        console.log(input);
    }
}
function howManyDaysInMonth(month,year) {
    return new Date(year, month, 0).getDate();
}
