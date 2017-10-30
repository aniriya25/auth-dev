import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditproviderComponent } from './addeditprovider.component';

describe('AddeditproviderComponent', () => {
  let component: AddeditproviderComponent;
  let fixture: ComponentFixture<AddeditproviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditproviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditproviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
