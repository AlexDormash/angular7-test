import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingPromotionComponent } from './pricing-promotion.component';

describe('PricingPromotionComponent', () => {
  let component: PricingPromotionComponent;
  let fixture: ComponentFixture<PricingPromotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingPromotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
