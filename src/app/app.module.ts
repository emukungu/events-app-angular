import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list-component';
import { EventThumbnailComponent } from './events/event-thumbnail-component';
import { NavBarComponent } from './nav/nav-component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event-component';
import { Error404Component } from './errors/404.component';

import { EventService, EventsRouteActivator, checkState } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';
import { appRoutes } from './routes/routes';
import { EventListResolver } from './events/shared/event-list-resolver-service';
import { AuthService } from './user/auth.service';
import CreateSessionComponent from './events/event-details/create-sessions-component';
import SessionListComponent from './events/event-details/sessions-list-component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    EventService, ToastrService, EventsRouteActivator,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkState
    },
    EventListResolver,
    AuthService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
