import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderdetailsComponent } from './providerdetails.component';

describe('ProviderdetailsComponent', () => {
  let component: ProviderdetailsComponent;
  let fixture: ComponentFixture<ProviderdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
