import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletMousComponent } from './outlet-mous.component';

describe('OutletMousComponent', () => {
  let component: OutletMousComponent;
  let fixture: ComponentFixture<OutletMousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutletMousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutletMousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
