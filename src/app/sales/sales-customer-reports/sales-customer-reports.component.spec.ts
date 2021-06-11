import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesCustomerReportsComponent } from './sales-customer-reports.component';

describe('SalesCustomerReportsComponent', () => {
  let component: SalesCustomerReportsComponent;
  let fixture: ComponentFixture<SalesCustomerReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesCustomerReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesCustomerReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
