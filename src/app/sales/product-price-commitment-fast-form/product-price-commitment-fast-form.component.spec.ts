import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPriceCommitmentFastFormComponent } from './product-price-commitment-fast-form.component';

describe('ProductPriceCommitmentFastFormComponent', () => {
  let component: ProductPriceCommitmentFastFormComponent;
  let fixture: ComponentFixture<ProductPriceCommitmentFastFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPriceCommitmentFastFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPriceCommitmentFastFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
