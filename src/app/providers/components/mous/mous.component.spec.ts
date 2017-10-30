import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MousComponent } from './mous.component';

describe('MousComponent', () => {
  let component: MousComponent;
  let fixture: ComponentFixture<MousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
