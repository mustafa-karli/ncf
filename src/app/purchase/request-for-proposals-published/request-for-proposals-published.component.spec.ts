import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestForProposalsPublishedComponent } from './request-for-proposals-published.component';

describe('RequestForProposalsPublishedComponent', () => {
  let component: RequestForProposalsPublishedComponent;
  let fixture: ComponentFixture<RequestForProposalsPublishedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestForProposalsPublishedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestForProposalsPublishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
