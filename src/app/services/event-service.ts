import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { Event } from '../event/event';


@Injectable()
export class EventService {

    private apiURL = 'http://localhost:3000/';
    private headers = new Headers({
        'Content-Type': 'application/json',
    });

    mockUserId: number = 1;

    constructor(private http: Http) { }

    // lat=41.1408&lon=-73.2613&radius=1000

    /*

    apiRoutes.get('/:userId/events', eventController.getAllUserEvents);
    apiRoutes.get('/:userId/events/date/:date', eventController.getUserDateEvents);
    apiRoutes.get('/:userId/events/month/:month', eventController.getUserMonthEvents);

    */

    getAllEvents(): Promise<Event[]> {
        const finalURL = this.apiURL + 'events';
        return this.http.get(finalURL, {headers: this.headers})
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    getAllUserEvents(userId: number): Promise<Event[]> {
        const finalURL = this.apiURL + userId + '/events';
        return this.http.get(finalURL, {headers: this.headers})
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    getUserDateEvents(userId: number, date: string): Promise<Event[]> {
        const finalURL = this.apiURL + userId + '/events/date/' + date;
        return this.http.get(finalURL, {headers: this.headers})
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    getUserMonthEvents(userId: number, month: number): Promise<Event[]> {
        const finalURL = this.apiURL + userId + '/events/month/' + month;
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
