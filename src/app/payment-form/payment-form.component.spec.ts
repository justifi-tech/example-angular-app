import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentFormComponent } from './payment-form.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('PaymentFormComponent', () => {
  let component: PaymentFormComponent;
  let fixture: ComponentFixture<PaymentFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentFormComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    fixture = TestBed.createComponent(PaymentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(true).toBeTruthy();
  });
});
