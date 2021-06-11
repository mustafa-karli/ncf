import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveManhourFormComponent } from './approve-manhour-form.component';

describe('ApproveManhourFormComponent', () => {
  let component: ApproveManhourFormComponent;
  let fixture: ComponentFixture<ApproveManhourFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveManhourFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveManhourFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
