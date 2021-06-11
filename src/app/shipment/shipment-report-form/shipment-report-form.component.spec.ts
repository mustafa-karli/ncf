import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentReportFormComponent } from './shipment-report-form.component';

describe('ShipmentReportFormComponent', () => {
  let component: ShipmentReportFormComponent;
  let fixture: ComponentFixture<ShipmentReportFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmentReportFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentReportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
