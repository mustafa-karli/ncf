import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPriceCommitmentFormComponent } from './product-price-commitment-form.component';

describe('ProductPriceCommitmentFormComponent', () => {
  let component: ProductPriceCommitmentFormComponent;
  let fixture: ComponentFixture<ProductPriceCommitmentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPriceCommitmentFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPriceCommitmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
