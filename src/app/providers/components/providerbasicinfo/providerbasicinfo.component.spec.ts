import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderbasicinfoComponent } from './providerbasicinfo.component';

describe('ProviderbasicinfoComponent', () => {
  let component: ProviderbasicinfoComponent;
  let fixture: ComponentFixture<ProviderbasicinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderbasicinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderbasicinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
