import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletSpecialitiesComponent } from './outlet-specialities.component';

describe('OutletSpecialitiesComponent', () => {
  let component: OutletSpecialitiesComponent;
  let fixture: ComponentFixture<OutletSpecialitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutletSpecialitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutletSpecialitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
