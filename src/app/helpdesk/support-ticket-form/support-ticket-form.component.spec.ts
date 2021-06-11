import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportTicketFormComponent } from './support-ticket-form.component';

describe('SupportTicketFormComponent', () => {
  let component: SupportTicketFormComponent;
  let fixture: ComponentFixture<SupportTicketFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportTicketFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportTicketFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
