import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletBasicInfoComponent } from './outlet-basic-info.component';

describe('OutletBasicInfoComponent', () => {
  let component: OutletBasicInfoComponent;
  let fixture: ComponentFixture<OutletBasicInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutletBasicInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutletBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
