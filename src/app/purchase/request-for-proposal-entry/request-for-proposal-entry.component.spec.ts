import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestForProposalEntryComponent } from './request-for-proposal-entry.component';

describe('RequestForProposalEntryComponent', () => {
  let component: RequestForProposalEntryComponent;
  let fixture: ComponentFixture<RequestForProposalEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestForProposalEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestForProposalEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
