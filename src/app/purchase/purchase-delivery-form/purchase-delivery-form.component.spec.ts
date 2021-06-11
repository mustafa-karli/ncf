import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseDeliveryFormComponent } from './purchase-delivery-form.component';

describe('PurchaseDeliveryFormComponent', () => {
  let component: PurchaseDeliveryFormComponent;
  let fixture: ComponentFixture<PurchaseDeliveryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseDeliveryFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseDeliveryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
