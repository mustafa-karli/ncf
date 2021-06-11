import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesCustomerReportFormComponent } from './sales-customer-report-form.component';

describe('SalesCustomerReportFormComponent', () => {
  let component: SalesCustomerReportFormComponent;
  let fixture: ComponentFixture<SalesCustomerReportFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesCustomerReportFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesCustomerReportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
