// bank-account-form.component.ts

import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-bank-account-form',
  templateUrl: './bank-account-form.component.html',
  styleUrls: ['./bank-account-form.component.css'],
})
export class BankAccountFormComponent implements OnInit {
  @ViewChild('bankAccountForm') bankAccountForm: any;
  @Input() validationModeValue:
    | 'onChange'
    | 'onBlur'
    | 'onSubmit'
    | 'onTouched'
    | 'all' = 'onSubmit';

  @Output() bankAccountFormReady = new EventEmitter<any>();
  @Output() ready = new EventEmitter<any>();
  @Output() bankAccountFormTokenize = new EventEmitter<any>();
  @Output() bankAccountFormValidate = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    // Now you can access the 'justifi-bank-account-form' component
    console.log('this.bankAccountForm: ', this.bankAccountForm);
    this.bankAccountForm.el.validate();
  }

  onBankAccountFormReady() {
    console.log(
      '%c onBankAccountFormReady',
      'color: lightgreen; font-size: 16px;'
    );
  }

  onReady() {
    console.log('%c onReady', 'color: green; font-size: 16px;');
  }

  onBankAccountFormValidate($event: any) {
    console.log(
      '%c onBankAccountFormValidate!',
      'color: red; font-size: 16px;'
    );
    console.log('onBankAccountFormValidate: ', $event);
  }

  onBankAccountFormTokenize($event: any) {
    console.log(
      '%c onBankAccountFormTokenize!',
      'color: lightblue; font-size: 16px;'
    );
    console.log('onBankAccountFormTokenize: ', $event);
  }

  onValidateClick() {
    console.log(
      '%c onValidateClick!',
      'color: lightblue; font-size: 16px;',
      this.bankAccountForm
    );

    this.bankAccountForm.el.validate();
  }
}
