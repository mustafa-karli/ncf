import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesOwnerReportsComponent } from './sales-owner-reports.component';

describe('SalesOwnerReportsComponent', () => {
  let component: SalesOwnerReportsComponent;
  let fixture: ComponentFixture<SalesOwnerReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesOwnerReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesOwnerReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
