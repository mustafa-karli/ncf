import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesVendorReportsComponent } from './sales-vendor-reports.component';

describe('SalesVendorReportsComponent', () => {
  let component: SalesVendorReportsComponent;
  let fixture: ComponentFixture<SalesVendorReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesVendorReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesVendorReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
