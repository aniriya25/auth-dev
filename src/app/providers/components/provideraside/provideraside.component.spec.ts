import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderasideComponent } from './provideraside.component';

describe('ProviderasideComponent', () => {
  let component: ProviderasideComponent;
  let fixture: ComponentFixture<ProviderasideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderasideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderasideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
