import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletBankingComponent } from './outlet-banking.component';

describe('OutletBankingComponent', () => {
  let component: OutletBankingComponent;
  let fixture: ComponentFixture<OutletBankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutletBankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutletBankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
