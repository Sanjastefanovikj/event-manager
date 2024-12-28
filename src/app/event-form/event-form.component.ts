import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { EventService } from '../services/event.service';
import { Event } from '../models/event.model';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule], // Add FormsModule to imports array
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent {
  @Input() event: Event = { id: 0, name: '', date: '', location: '' };
  @Output() save = new EventEmitter<void>();

  constructor(private eventService: EventService) {}

  onSubmit(): void {
    if (this.event.id) {
      this.eventService.updateEvent(this.event);
    } else {
      this.event.id = Math.floor(Math.random() * 1000); // Generate a random ID for new event
      this.eventService.addEvent(this.event);
    }
    this.save.emit();
    this.resetForm();
  }

  resetForm(): void {
    this.event = { id: 0, name: '', date: '', location: '' };
  }
}

