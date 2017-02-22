import {Http, Headers} from '@angular/http';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

import {AppStore} from '../shared/index';
import {IEvent} from '../shared/index';

const BASE_URL = 'http://localhost:3000/events/';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class EventsService {
  events: Observable<Array<IEvent>>;

  constructor(private http: Http, private store: Store<AppStore>) {
    this.events = store.select('events');
  }

  loadEvents() {
    this.http.get(BASE_URL)
      .map(res => res.json())
      .map(payload => ({ type: 'ADD_EVENTS', payload }))
      .subscribe(action => this.store.dispatch(action));
  }

  saveEvent(event: IEvent) {
    (event.id) ? this.updateEvent(event) : this.createEvent(event);
  }

  createEvent(event: IEvent) {
    this.http.post(`${BASE_URL}`, JSON.stringify(event), HEADER)
      .map(res => res.json())
      .map(payload => ({ type: 'CREATE_EVENT', payload }))
      .subscribe(action => this.store.dispatch(action));
  }

  updateEvent(event: IEvent) {
    this.http.put(`${BASE_URL}${event.id}`, JSON.stringify(event), HEADER)
      .subscribe(action => this.store.dispatch({ type: 'UPDATE_EVENT', payload: event }));
  }

  deleteEvent(event: IEvent) {
    this.http.delete(`${BASE_URL}${event.id}`)
      .subscribe(action => this.store.dispatch({ type: 'DELETE_EVENT', payload: event }));
  }
}
