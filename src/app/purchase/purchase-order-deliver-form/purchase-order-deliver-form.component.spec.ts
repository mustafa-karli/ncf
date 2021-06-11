import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseOrderDeliverFormComponent } from './purchase-order-deliver-form.component';

describe('PurchaseOrderDeliverFormComponent', () => {
  let component: PurchaseOrderDeliverFormComponent;
  let fixture: ComponentFixture<PurchaseOrderDeliverFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseOrderDeliverFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseOrderDeliverFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
