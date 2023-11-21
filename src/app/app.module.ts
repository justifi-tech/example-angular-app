import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentLibraryModule } from '@justifi/angular-components';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BankAccountFormComponent } from './bank-account-form/bank-account-form.component';
import { CardFormComponent } from './card-form/card-form.component';
import { BillingFormComponent } from './billing-form/billing-form.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    AppComponent,
    BankAccountFormComponent,
    CardFormComponent,
    BillingFormComponent,
    PaymentFormComponent,
  ],
  imports: [
    BrowserModule,
    ComponentLibraryModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/bank-account-form', pathMatch: 'full' },
      {
        path: 'bank-account-form',
        component: BankAccountFormComponent,
      },
      {
        path: 'card-form',
        component: CardFormComponent,
      },
      { path: 'billing-form', component: BillingFormComponent },
      { path: 'payment-form', component: PaymentFormComponent },
    ]),
    IonicModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
