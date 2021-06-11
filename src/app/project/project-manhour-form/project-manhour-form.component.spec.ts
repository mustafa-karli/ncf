import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectManhourFormComponent } from './project-manhour-form.component';

describe('ProjectManhourFormComponent', () => {
  let component: ProjectManhourFormComponent;
  let fixture: ComponentFixture<ProjectManhourFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectManhourFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectManhourFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
