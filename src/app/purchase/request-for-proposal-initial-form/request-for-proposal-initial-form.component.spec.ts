import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestForProposalInitialFormComponent } from './request-for-proposal-initial-form.component';

describe('RequestForProposalInitialFormComponent', () => {
  let component: RequestForProposalInitialFormComponent;
  let fixture: ComponentFixture<RequestForProposalInitialFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestForProposalInitialFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestForProposalInitialFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
