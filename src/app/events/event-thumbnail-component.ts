import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from './event.model';

@Component({
  selector:'event-thumbnail',
  template:`
  <div [routerLink] ="['/events', event.id]" class ='well hoverwell thumbnail'>
    <h2>{{event?.name}}</h2>
    <div>Date: {{event?.date}}</div>
    <div [ngSwitch] = "event?.time">
      Time: {{event?.time}}
      <span *ngSwitchCase = "'8:00 a.m'">(Early Start)</span>
      <span *ngSwitchCase = "'10:00 am'">(Late Start)</span>
      <span *ngSwitchDefault>(Normal Start)</span>
    </div>
    <div>Price: \${{event.price}}</div>
    <div *ngIf="event?.location">
      <span>Location: {{event.location.address}}</span>
      <span>&nbsp;</span>
      <span>{{event.location.city}}, {{event.location.country}}</span>
    </div>
  </div>
  `,
  styles:[`
    .thumbnail { min-height: 210px; }
  `]
})

export class EventThumbnailComponent{
  @Input() event:IEvent
}
