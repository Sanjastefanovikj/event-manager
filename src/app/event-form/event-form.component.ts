import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventService } from '../services/event.service';
import { Event } from '../models/event.model';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent {
  @Input() event: Event = { event_id: 0, name: '', venue: '', time: 0, date: '' }; // Updated structure
  @Output() save = new EventEmitter<void>();

  constructor(private eventService: EventService) {}

  onSubmit(): void {
    if (this.event.event_id) {
      this.eventService.updateEvent(this.event.event_id, this.event).subscribe(() => {
        this.save.emit();
        this.resetForm();
      });
    } else {
      this.eventService.saveEvent(this.event).subscribe(() => {
        this.save.emit();
        this.resetForm();
      });
    }
  }

  resetForm(): void {
    this.event = { event_id: 0, name: '', venue: '', time: 0, date: '' }; // Updated structure
  }
}
