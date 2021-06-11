import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialRequestReportFormComponent } from './material-request-report-form.component';

describe('MaterialRequestReportFormComponent', () => {
  let component: MaterialRequestReportFormComponent;
  let fixture: ComponentFixture<MaterialRequestReportFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialRequestReportFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialRequestReportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
