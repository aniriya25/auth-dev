import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceValidateComponent } from './invoice-validate.component';

describe('InvoiceValidateComponent', () => {
  let component: InvoiceValidateComponent;
  let fixture: ComponentFixture<InvoiceValidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceValidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
