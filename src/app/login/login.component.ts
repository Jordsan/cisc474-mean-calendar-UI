import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login-component',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  private email: string;
  private password: string ;

  ngOnInit() {
  }
}
