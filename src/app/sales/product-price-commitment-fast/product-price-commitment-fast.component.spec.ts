import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPriceCommitmentFastComponent } from './product-price-commitment-fast.component';

describe('ProductPriceCommitmentFastComponent', () => {
  let component: ProductPriceCommitmentFastComponent;
  let fixture: ComponentFixture<ProductPriceCommitmentFastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPriceCommitmentFastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPriceCommitmentFastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
