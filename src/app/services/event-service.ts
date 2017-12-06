import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { Event } from '../event/event';


@Injectable()
export class EventService {

    private apiURL = 'http://localhost:3000/api/';
    private headers = new Headers({
        'Content-Type': 'application/json',
    });

    constructor(private http: Http) { }

    createEvent(eventId: number, userIds: number[], date: string,
        startTime: number, endTime: number, title: string, description: string): Observable<any> {
        const finalURL = this.apiURL + 'events';
        return this.http.post(finalURL,
            {
                eventId: eventId,
                userIds: userIds,
                date: date,
                startTime: startTime,
                endTime: endTime,
                title: title,
                description: description
            },
            { headers: this.headers })
            .map(event => {
                console.log(event);
            });
    }

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
