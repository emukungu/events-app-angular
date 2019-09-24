import { Component, Input } from '@angular/core';
import { ISession } from '../event.model';

@Component({
  selector: 'session-list',
  templateUrl: './sessions-list-template.html'
})

export default class SessionListComponent{
  @Input() sessions: ISession // parsing data from a parent to a child component
}
