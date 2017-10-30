import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidercontactComponent } from './providercontact.component';

describe('ProvidercontactComponent', () => {
  let component: ProvidercontactComponent;
  let fixture: ComponentFixture<ProvidercontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvidercontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvidercontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
