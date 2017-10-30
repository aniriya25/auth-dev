import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmemberbulkComponent } from './addmemberbulk.component';

describe('AddmemberbulkComponent', () => {
  let component: AddmemberbulkComponent;
  let fixture: ComponentFixture<AddmemberbulkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmemberbulkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmemberbulkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
