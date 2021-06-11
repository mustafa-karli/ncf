import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportGroupFormComponent } from './support-group-form.component';

describe('SupportGroupFormComponent', () => {
  let component: SupportGroupFormComponent;
  let fixture: ComponentFixture<SupportGroupFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportGroupFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportGroupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
