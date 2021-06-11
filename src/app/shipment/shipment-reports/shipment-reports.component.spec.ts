import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentReportsComponent } from './shipment-reports.component';

describe('ShipmentReportsComponent', () => {
  let component: ShipmentReportsComponent;
  let fixture: ComponentFixture<ShipmentReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmentReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
