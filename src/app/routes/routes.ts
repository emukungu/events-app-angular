import { Routes } from '@angular/router';
import { EventsListComponent } from '../events/events-list-component';
import { EventDetailsComponent } from '../events/event-details/event-details.component';
import { CreateEventComponent } from '../events/create-event-component';
import { Error404Component } from '../errors/404.component';
import { EventsRouteActivator } from '../events/shared/event.service';
import { EventListResolver } from '../events/shared/event-list-resolver-service';
import CreateSessionComponent from '../events/event-details/create-sessions-component';

export const appRoutes:Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate:["canDeactivateCreateEvent"]},
  { path:'events', component: EventsListComponent, resolve: {events: EventListResolver}},
  { path:'events/:id', component: EventDetailsComponent, canActivate:[EventsRouteActivator]},
  { path:'404', component: Error404Component},
  { path: 'events/session/new', component: CreateSessionComponent},
  { path: '', redirectTo:'/events', pathMatch:'full' },
  { path: 'user', loadChildren: './user/user.module#UserModule'},
]
 