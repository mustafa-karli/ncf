import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestForProposalEntryFormComponent } from './request-for-proposal-entry-form.component';

describe('RequestForProposalEntryFormComponent', () => {
  let component: RequestForProposalEntryFormComponent;
  let fixture: ComponentFixture<RequestForProposalEntryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestForProposalEntryFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestForProposalEntryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
