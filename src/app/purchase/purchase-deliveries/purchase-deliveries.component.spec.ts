import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseDeliveriesComponent } from './purchase-deliveries.component';

describe('PurchaseDeliveriesComponent', () => {
  let component: PurchaseDeliveriesComponent;
  let fixture: ComponentFixture<PurchaseDeliveriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseDeliveriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseDeliveriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
