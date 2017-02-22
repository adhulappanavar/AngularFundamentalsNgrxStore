import { Routes } from '@angular/router'
import { Error404Component } from './errors/404.component'
import { EventsListComponent } from './events-list/events-list.component'
import { CreateEventComponent } from './create-event/create-event.component'

export const appRoutes : Routes = [
  { path: '404', component: Error404Component },
  { path: 'eventlist', component: EventsListComponent},
  { path: 'createevent', component: CreateEventComponent}
]