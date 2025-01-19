import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventService } from '../services/event.service';
import { Event } from '../models/event.model';
import { EventSearchComponent } from '../event-search/event-search.component';
import { EventFormComponent } from '../event-form/event-form.component';

@Component({
  standalone: true,
  imports: [CommonModule, EventSearchComponent, EventFormComponent],
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: Event[] = [];
  filteredEvents: Event[] = [];
  selectedEvent: Event | null = null;

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.loadEvents();
  }

  // Load all events from the API
  private loadEvents(): void {
    this.eventService.getAllEvents().subscribe((events: Event[]) => {
      this.events = events;
      this.filteredEvents = events;
    });
  }

  // Search for events based on a search term
  searchEvents(searchTerm: string): void {
    this.filteredEvents = searchTerm
      ? this.events.filter(event => event.name.toLowerCase().includes(searchTerm.toLowerCase()))
      : this.events;
  }

  // Prepare to add a new event
  addEvent(): void {
    this.selectedEvent = { event_id: 0, name: '', venue: '', time: 0, date: '' };
  }

  // Prepare to edit an existing event
  editEvent(event: Event): void {
    this.selectedEvent = event;
  }

  // Delete an event by ID
  deleteEvent(event_id: number): void {
    this.eventService.deleteEvent(event_id).subscribe(() => {
      this.loadEvents(); // Reload the list after deletion
    });
  }

  // Save the current event (add or update)
  saveEvent(): void {
    if (this.selectedEvent) {
      if (this.selectedEvent.event_id === 0) {
        this.eventService.saveEvent(this.selectedEvent).subscribe(() => {
          this.selectedEvent = null;
          this.loadEvents(); // Reload the list after saving
        });
      } else {
        this.eventService.updateEvent(this.selectedEvent.event_id, this.selectedEvent).subscribe(() => {
          this.selectedEvent = null;
          this.loadEvents(); // Reload the list after saving
        });
      }
    }
  }
}
