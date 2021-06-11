import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesReportFormComponent } from './sales-report-form.component';

describe('SalesReportFormComponent', () => {
  let component: SalesReportFormComponent;
  let fixture: ComponentFixture<SalesReportFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesReportFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesReportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
