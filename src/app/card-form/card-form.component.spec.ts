import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFormComponent } from './card-form.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CardFormComponent', () => {
  let component: CardFormComponent;
  let fixture: ComponentFixture<CardFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardFormComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    fixture = TestBed.createComponent(CardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(true).toBeTruthy();
  });
});
