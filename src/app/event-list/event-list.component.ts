import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventService } from '../services/event.service'; // Ensure this path is correct
import { Event } from '../models/event.model';
import { EventSearchComponent } from '../event-search/event-search.component'; // Import the EventSearchComponent
import { EventFormComponent } from '../event-form/event-form.component'; // Import EventFormComponent

@Component({
  standalone: true,
  imports: [CommonModule, EventSearchComponent, EventFormComponent], // Add components to imports
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: Event[] = [];
  filteredEvents: Event[] = [];
  selectedEvent: Event | null = null; // Add selectedEvent property

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.getEvents().subscribe((events: Event[]) => {
      this.events = events;
      this.filteredEvents = events;
    });
  }

  searchEvents(searchTerm: string): void {
    if (!searchTerm) {
      this.filteredEvents = this.events;
    } else {
      this.filteredEvents = this.events.filter(event =>
        event.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }

  addEvent(): void { this.selectedEvent = { id: 0, name: '', date: '', location: '' }; }

  editEvent(event: Event): void {
    this.selectedEvent = event;
  }

  deleteEvent(id: number): void {
    this.eventService.deleteEvent(id);
    this.ngOnInit(); // Reload the list after deletion
  }

  saveEvent(): void {
    this.selectedEvent = null;
    this.ngOnInit(); // Reload the list after saving
  }
}




