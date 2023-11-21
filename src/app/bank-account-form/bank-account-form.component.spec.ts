import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BankAccountFormComponent } from './bank-account-form.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('BankAccountFormComponent', () => {
  let component: BankAccountFormComponent;
  let fixture: ComponentFixture<BankAccountFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankAccountFormComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    fixture = TestBed.createComponent(BankAccountFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should emit bankAccountFormReady event', () => {
    spyOn(component.bankAccountFormReady, 'emit');

    const element = fixture.debugElement.query(
      By.css('justifi-bank-account-form')
    );
    // Assuming that 'bankAccountFormReady' is emitted when the element is clicked
    element.triggerEventHandler('click', null);

    expect(component.bankAccountFormReady.emit).toHaveBeenCalled();
  });

  it('should emit ready event', () => {
    spyOn(component.ready, 'emit');

    const element = fixture.debugElement.query(
      By.css('justifi-bank-account-form')
    );
    // Assuming that 'ready' is emitted when the element is clicked
    element.triggerEventHandler('click', null);

    expect(component.ready.emit).toHaveBeenCalled();
  });

  it('should emit bankAccountFormTokenize event when the form is ready', () => {
    spyOn(component.bankAccountFormTokenize, 'emit');

    const element = fixture.debugElement.query(
      By.css('justifi-bank-account-form')
    );
    // Assuming that 'bankAccountFormTokenize' is emitted when the element is clicked
    element.triggerEventHandler('click', null);

    expect(component.bankAccountFormTokenize.emit).toHaveBeenCalled();
  });
});
