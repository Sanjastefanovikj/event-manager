import { Routes } from '@angular/router';
import { EventListComponent } from './event-list/event-list.component';
import { EventFormComponent } from './event-form/event-form.component';
import { EventSearchComponent } from './event-search/event-search.component';

export const routes: Routes = [
  { path: 'events', component: EventListComponent },
  { path: 'event-form', component: EventFormComponent },
  { path: 'event-search', component: EventSearchComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' } // Redirect to events by default
];
