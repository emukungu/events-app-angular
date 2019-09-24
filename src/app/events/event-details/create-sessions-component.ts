import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISession } from '../event.model';


@Component({
  selector:'create-session',
  'templateUrl': './create-session-template.html',
  styles:[`
    em { float: right; color: #E05C65; padding-left: 10px; }
    .error input, error select, error textarea { background-color: #E3C3C5; }
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder{ color: #999; }
    .error :-moz-placeholder{ color: #999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})

export default class CreateSessionComponent{
  @Output() cancelSession = new EventEmitter();
  @Output() saveNewSession = new EventEmitter() // output parameter for our parent component to bind to. emit message back to parent when user clicks save.
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;
  newSessionForm: FormGroup;
  savedSession: ISession;
  // reactive form

  ngOnInit(){
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), this.restrictedWords ]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    })
  }

  saveSession(formValues){
    this.savedSession = {
      id: undefined,
      name: formValues.name,
      presenter: formValues.presenter,
      duration: +formValues.duration,
      level: formValues.level,
      abstract: formValues.abstract,
      voters: []
    }

    this.saveNewSession.emit(this.savedSession) //emits ==> sends data to parent component
  }

  private restrictedWords(control: FormControl):{[key:string]: any}
  {
    return control.value.includes('foo')
    ? {'restrictedWords': 'foo'}
    :null;
  }

  cancel(){
    this.cancelSession.emit();
  }
}
