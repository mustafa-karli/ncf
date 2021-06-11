import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseOrderDeliverComponent } from './purchase-order-deliver.component';

describe('PurchaseOrderDeliverComponent', () => {
  let component: PurchaseOrderDeliverComponent;
  let fixture: ComponentFixture<PurchaseOrderDeliverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseOrderDeliverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseOrderDeliverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
