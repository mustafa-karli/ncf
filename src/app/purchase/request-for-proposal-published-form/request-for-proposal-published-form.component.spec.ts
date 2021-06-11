import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestForProposalPublishedFormComponent } from './request-for-proposal-published-form.component';

describe('RequestForProposalPublishedFormComponent', () => {
  let component: RequestForProposalPublishedFormComponent;
  let fixture: ComponentFixture<RequestForProposalPublishedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestForProposalPublishedFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestForProposalPublishedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
