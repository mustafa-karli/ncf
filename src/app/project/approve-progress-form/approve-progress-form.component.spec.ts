import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveProgressFormComponent } from './approve-progress-form.component';

describe('ApproveProgressFormComponent', () => {
  let component: ApproveProgressFormComponent;
  let fixture: ComponentFixture<ApproveProgressFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveProgressFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveProgressFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
