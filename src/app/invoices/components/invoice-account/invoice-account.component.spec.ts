import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceAccountComponent } from './invoice-account.component';

describe('InvoiceAccountComponent', () => {
  let component: InvoiceAccountComponent;
  let fixture: ComponentFixture<InvoiceAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
