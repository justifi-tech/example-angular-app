// card-form.component.ts

import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css'],
})
export class CardFormComponent implements OnInit {
  @Input() validationModeValue:
    | 'onChange'
    | 'onBlur'
    | 'onSubmit'
    | 'onTouched'
    | 'all' = 'onChange';

  @Output() cardFormReady = new EventEmitter<any>();
  @Output() ready = new EventEmitter<any>();
  @Output() cardFormTokenize = new EventEmitter<any>();
  @Output() cardFormValidate = new EventEmitter<any>();

  constructor() {}

  iframeOrigin = environment.iframeOrigin;

  ngOnInit(): void {}

  onCardFormReady(event: any) {
    this.cardFormReady.emit(event);
  }

  onReady(event: any) {
    this.ready.emit(event);
  }

  onTokenize(event: any) {
    this.cardFormTokenize.emit(event);
  }

  onValidate(event: any) {
    this.cardFormValidate.emit(event);
  }
}
