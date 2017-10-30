import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletInfraComponent } from './outlet-infra.component';

describe('OutletInfraComponent', () => {
  let component: OutletInfraComponent;
  let fixture: ComponentFixture<OutletInfraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutletInfraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutletInfraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
