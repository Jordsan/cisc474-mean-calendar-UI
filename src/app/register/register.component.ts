import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-service';

@Component({
    selector: 'app-register-component',
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css']
})
export class RegisterComponent implements OnInit {

    private username: string;
    private password: string;

    constructor(private userService: UserService) {}

    ngOnInit() {
    }

}
