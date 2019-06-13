import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssortmentAvailabilityComponent } from './assortment-availability.component';

describe('AssortmentAvailabilityComponent', () => {
  let component: AssortmentAvailabilityComponent;
  let fixture: ComponentFixture<AssortmentAvailabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssortmentAvailabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssortmentAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
