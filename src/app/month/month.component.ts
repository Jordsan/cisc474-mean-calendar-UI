import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-month-component',
    templateUrl: 'month.component.html',
    styleUrls: [ 'month.component.css' ]
})
export class MonthComponent implements OnInit {

    monthtitle: string;

    @Input()
    monthNum: number;

    getmonthtitle(){
      if(this.monthNum == 1){
        this.monthtitle = "January"
      }
      else if(this.monthNum==2){
        this.monthtitle = "February"
      }
      else if(this.monthNum==3){
        this.monthtitle = "March"
      }
      else if(this.monthNum==4){
        this.monthtitle = "April"
      }
      else if(this.monthNum==5){
        this.monthtitle = "May"
      }
      else if(this.monthNum==6){
        this.monthtitle = "June"
      }
      else if(this.monthNum==7){
        this.monthtitle = "July"
      }
      else if(this.monthNum==8){
        this.monthtitle = "August"
      }
      else if(this.monthNum==9){
        this.monthtitle = "September"
      }
      else if(this.monthNum==10){
        this.monthtitle = "October"
      }
      else if(this.monthNum==11){
        this.monthtitle = "November"
      }
      else if(this.monthNum==12){
        this.monthtitle = "December"
      }
      return this.monthtitle;
      console.log(this.monthtitle);
    }

    constructor() {
    }

    ngOnInit(): void {
    }

    searchDays(input: string): void {
        console.log(input);
    }
}
