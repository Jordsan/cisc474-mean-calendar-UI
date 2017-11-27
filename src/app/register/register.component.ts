import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-register-component',
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css']
})
export class RegisterComponent implements OnInit {

  private email: string;
  private password: string ;

  ngOnInit() {
  }
}
