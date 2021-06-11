import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportAreaFormComponent } from './support-area-form.component';

describe('SupportAreaFormComponent', () => {
  let component: SupportAreaFormComponent;
  let fixture: ComponentFixture<SupportAreaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportAreaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportAreaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
