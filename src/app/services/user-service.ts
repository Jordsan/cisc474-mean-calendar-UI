import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { User } from '../user/user';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Router } from '@angular/router';

@Injectable()
export class UserService {

    private apiURL = 'http://localhost:3000/auth/';
    private headers = new Headers({
        'Content-Type': 'application/json',
    });

    activeUser: User;

    constructor(private http: Http, private router: Router) { }

    // register(username: string, password: string, firstName: string, lastName: string, userId: number): Promise<any> {
    //     const finalURL = this.apiURL + 'users/register';
    //     return this.http.post(finalURL,
    //         { username: username, password: password, firstName: firstName, lastName: lastName, userId: userId },
    //         { headers: this.headers })
    //         .map(user => {
    //             this.activeUser = user.json();
    //         }).toPromise();
    // }

    login(username: string, password: string): Promise<any> {
        const finalURL = this.apiURL + 'users/login';
        return this.http.post(finalURL,
            { username: username, password: password },
            { headers: this.headers })
            .map(user => {
                this.activeUser = user.json().user;
                this.router.navigate(['calendar/' + this.activeUser.userId]);
            }).toPromise();
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
