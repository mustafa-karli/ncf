import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessReportFormComponent } from './business-report-form.component';

describe('BusinessReportFormComponent', () => {
  let component: BusinessReportFormComponent;
  let fixture: ComponentFixture<BusinessReportFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessReportFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessReportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
