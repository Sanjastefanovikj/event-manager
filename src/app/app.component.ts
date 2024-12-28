import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListComponent } from './event-list/event-list.component'; // Import EventListComponent

@Component({
  standalone: true,
  imports: [CommonModule, EventListComponent], // Add EventListComponent to imports
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EventManager';
}
