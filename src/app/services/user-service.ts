import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class UserService {

    private apiURL = 'http://localhost:3000/api/';
    private headers = new Headers({
        'Content-Type': 'application/json',
    });

    constructor(private http: Http) { }

    register(): Promise<any> {
        const finalURL = this.apiURL + 'events';
        return this.http.get(finalURL, {headers: this.headers})
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
