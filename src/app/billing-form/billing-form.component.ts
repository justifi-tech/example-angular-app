import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'billing-form',
  templateUrl: './billing-form.component.html',
  styleUrls: ['./billing-form.component.css'],
})
export class BillingFormComponent implements OnInit {
  @Input() legend: string = '';

  constructor() {}

  ngOnInit(): void {}
}
