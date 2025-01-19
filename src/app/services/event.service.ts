import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl = 'http://localhost:8080/api/1/event'; // API endpoint for events

  constructor(private http: HttpClient) {}

  // Fetch all events from the API
  getAllEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.apiUrl);
  }

  // Fetch a specific event by ID
  getEventById(event_id: number): Observable<Event> {
    return this.http.get<Event>(`${this.apiUrl}/${event_id}`);
  }

  // Update an existing event
  updateEvent(event_id: number, event: Event): Observable<Event> {
    return this.http.put<Event>(`${this.apiUrl}/${event_id}`, event);
  }

  // Delete an event by ID
  deleteEvent(event_id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${event_id}`);
  }

  // Create a new event
  saveEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(this.apiUrl, event);
  }
}
