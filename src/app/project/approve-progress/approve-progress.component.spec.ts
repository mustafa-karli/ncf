import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveProgressComponent } from './approve-progress.component';

describe('ApproveProgressComponent', () => {
  let component: ApproveProgressComponent;
  let fixture: ComponentFixture<ApproveProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
