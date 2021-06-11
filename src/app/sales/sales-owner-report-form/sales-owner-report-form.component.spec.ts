import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesOwnerReportFormComponent } from './sales-owner-report-form.component';

describe('SalesOwnerReportFormComponent', () => {
  let component: SalesOwnerReportFormComponent;
  let fixture: ComponentFixture<SalesOwnerReportFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesOwnerReportFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesOwnerReportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
