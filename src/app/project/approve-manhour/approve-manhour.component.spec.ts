import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveManhourComponent } from './approve-manhour.component';

describe('ApproveManhourComponent', () => {
  let component: ApproveManhourComponent;
  let fixture: ComponentFixture<ApproveManhourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveManhourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveManhourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
