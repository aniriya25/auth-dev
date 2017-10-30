import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderservicesComponent } from './providerservices.component';

describe('ProviderservicesComponent', () => {
  let component: ProviderservicesComponent;
  let fixture: ComponentFixture<ProviderservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
