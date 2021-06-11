import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectReportFormComponent } from './project-report-form.component';

describe('ProjectReportFormComponent', () => {
  let component: ProjectReportFormComponent;
  let fixture: ComponentFixture<ProjectReportFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectReportFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectReportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
