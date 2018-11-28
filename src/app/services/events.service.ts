import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient, private route:Router) { }
  private _eventsUrl = 'http://localhost:3030/events'

  getevents(){
    return this.http.get<any>(this._eventsUrl)
  }
}
