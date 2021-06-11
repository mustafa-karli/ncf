import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationTypeFormComponent } from './notification-type-form.component';

describe('NotificationTypeFormComponent', () => {
  let component: NotificationTypeFormComponent;
  let fixture: ComponentFixture<NotificationTypeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationTypeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
