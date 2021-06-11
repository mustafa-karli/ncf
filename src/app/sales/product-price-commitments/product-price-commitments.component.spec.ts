import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPriceCommitmentsComponent } from './product-price-commitments.component';

describe('ProductPriceCommitmentsComponent', () => {
  let component: ProductPriceCommitmentsComponent;
  let fixture: ComponentFixture<ProductPriceCommitmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPriceCommitmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPriceCommitmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
