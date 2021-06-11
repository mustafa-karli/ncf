import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestForProposalCompleteFormComponent } from './request-for-proposal-complete-form.component';

describe('RequestForProposalCompleteFormComponent', () => {
  let component: RequestForProposalCompleteFormComponent;
  let fixture: ComponentFixture<RequestForProposalCompleteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestForProposalCompleteFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestForProposalCompleteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
