import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'example-angular-app';
  iframeOriginValue: string = 'your-iframe-origin-here';
  validationModeValue: string = 'your-validation-mode-here';

  onBankAccountFormReady(event: Event) {
    // Handle the bankAccountFormReady event here
    console.log('Bank Account Form Ready:', event);
  }

  onReady(event: Event) {
    // Handle the ready event here
    console.log('Ready:', event);
  }

  onTokenize(event: Event) {
    // Handle the bankAccountFormTokenize event here
    console.log('Tokenize:', event);
  }

  onValidate(event: Event) {
    // Handle the bankAccountFormValidate event here
    console.log('Validate:', event);
  }
}
