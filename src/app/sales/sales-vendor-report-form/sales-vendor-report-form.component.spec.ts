import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesVendorReportFormComponent } from './sales-vendor-report-form.component';

describe('SalesVendorReportFormComponent', () => {
  let component: SalesVendorReportFormComponent;
  let fixture: ComponentFixture<SalesVendorReportFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesVendorReportFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesVendorReportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
