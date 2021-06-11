import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketReportFormComponent } from './ticket-report-form.component';

describe('TicketReportFormComponent', () => {
  let component: TicketReportFormComponent;
  let fixture: ComponentFixture<TicketReportFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketReportFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketReportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
