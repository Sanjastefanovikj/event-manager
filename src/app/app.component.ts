import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListComponent } from './event-list/event-list.component'; // Import EventListComponent
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  standalone: true,
  imports: [CommonModule, EventListComponent, RouterModule], // Add RouterModule to imports
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EventManager';
}
