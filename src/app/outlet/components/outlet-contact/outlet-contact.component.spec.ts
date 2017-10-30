import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletContactComponent } from './outlet-contact.component';

describe('OutletContactComponent', () => {
  let component: OutletContactComponent;
  let fixture: ComponentFixture<OutletContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutletContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutletContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
