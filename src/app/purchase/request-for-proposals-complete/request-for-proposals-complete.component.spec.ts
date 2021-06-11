import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestForProposalsCompleteComponent } from './request-for-proposals-complete.component';

describe('RequestForProposalsCompleteComponent', () => {
  let component: RequestForProposalsCompleteComponent;
  let fixture: ComponentFixture<RequestForProposalsCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestForProposalsCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestForProposalsCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
