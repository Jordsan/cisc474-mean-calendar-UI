import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-service';

@Component({
    selector: 'app-login-component',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

    username: string;
    password: string;


    constructor(private userService: UserService) {
        this.username = '';
        this.password = '';
    }

    ngOnInit() {
    }


    loginClick(): void {

        console.log('user: ' + this.username);
        console.log('pass: ' + this.password);

        this.userService.login(this.username, this.password).then(
            data => console.log('Data:' + data),
            err => console.log(err)
        );
    }
}
