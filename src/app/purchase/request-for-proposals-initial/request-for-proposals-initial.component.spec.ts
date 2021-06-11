import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestForProposalsInitialComponent } from './request-for-proposals-initial.component';

describe('RequestForProposalsInitialComponent', () => {
  let component: RequestForProposalsInitialComponent;
  let fixture: ComponentFixture<RequestForProposalsInitialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestForProposalsInitialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestForProposalsInitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
