import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectQuantitiesComponent } from './project-quantities.component';

describe('ProjectQuantitiesComponent', () => {
  let component: ProjectQuantitiesComponent;
  let fixture: ComponentFixture<ProjectQuantitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectQuantitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectQuantitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
