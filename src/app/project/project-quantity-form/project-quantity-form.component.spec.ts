import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectQuantityFormComponent } from './project-quantity-form.component';

describe('ProjectQuantityFormComponent', () => {
  let component: ProjectQuantityFormComponent;
  let fixture: ComponentFixture<ProjectQuantityFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectQuantityFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectQuantityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
