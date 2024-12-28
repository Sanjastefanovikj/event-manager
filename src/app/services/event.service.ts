import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Event } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private events: Event[] = [
    { id: 1, name: 'Angular Conference', date: '2024-10-10', location: 'New York' },
    { id: 2, name: 'React Summit', date: '2024-11-15', location: 'San Francisco' }
  ];

  getEvents(): Observable<Event[]> {
    return of(this.events);
  }

  addEvent(event: Event): void {
    this.events.push(event);
  }

  updateEvent(updatedEvent: Event): void {
    const index = this.events.findIndex(event => event.id === updatedEvent.id);
    if (index !== -1) {
      this.events[index] = updatedEvent;
    }
  }

  deleteEvent(id: number): void {
    this.events = this.events.filter(event => event.id !== id);
  }
}

