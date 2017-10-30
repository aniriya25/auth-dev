import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletServicesComponent } from './outlet-services.component';

describe('OutletServicesComponent', () => {
  let component: OutletServicesComponent;
  let fixture: ComponentFixture<OutletServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutletServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutletServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
