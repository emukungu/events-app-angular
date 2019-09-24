import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IEvent } from './event.model';
import { EventService } from './shared/event.service';

@Component({
  templateUrl:'./create-event-template.html',
  styles:[`
    em { float: right; color: #E05C65; padding-left: 10px; }
    .error input { background-color: #E3C3C5; }
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder{ color: #999; }
    .error :-moz-placeholder{ color: #999; }
    .error :ms-input-placeholder { color: #999; }
  `]

})

export class CreateEventComponent{
  isDirty: boolean = true;
  event : IEvent;
  newEvent
  constructor(private router: Router, private eventService: EventService){} //connecting/binding/injecting services/components to a specified component.

  ngOnInit(){
    this.event = {
      id:1,
      name: 'Ng Spectacular',
      date: new Date('9/26/2036'),
      time: '10:00 am',
      price: 799.99,
      imageUrl: 'http://ngSpectacular.com/logo.png',
      location:{
        address: '456 Happy Street',
        city: 'Felicity',
        country: 'Angularistan'
      },
      onlineUrl: 'http://ngSpectacular.com',
      sessions: []}
  }

  saveEvent(formValues){
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(["/events"]);

    // this.event = {
    //   id: formValues.id,
    //   name: formValues.name,
    //   date: formValues.date,
    //   time: formValues.time,
    //   price: formValues.price,
    //   imageUrl: formValues.image,
    //   location:{
    //     address: formValues.location,
    //     city: formValues.city,
    //     country: formValues.country
    //   },
    //   onlineUrl: formValues.onlineUrl,
    //   sessions: formValues.sessions
    // }

  }

  handleCancel(){
    this.router.navigate(["/events"])
  }

}
