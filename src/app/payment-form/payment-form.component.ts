import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css'],
})
export class PaymentFormComponent implements OnInit {
  @Input() card: boolean = true;
  @Input() bankAccount: boolean = false;

  accountId = environment.accountId;
  clientId = environment.clientId;
  iframeOrigin = environment.iframeOrigin;

  constructor() {}

  ngOnInit(): void {}

  handleSubmit($event: Event) {
    console.log('%c Form submitted', `color: green; font-weight: bold;`);
    console.log($event);
  }
}
