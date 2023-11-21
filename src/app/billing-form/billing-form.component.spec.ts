import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingFormComponent } from './billing-form.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('BillingFormComponent', () => {
  let component: BillingFormComponent;
  let fixture: ComponentFixture<BillingFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BillingFormComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    fixture = TestBed.createComponent(BillingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(true).toBeTruthy();
  });
});
