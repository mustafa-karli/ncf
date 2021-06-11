import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MxCounterTypeFormComponent } from './mx-counter-type-form.component';

describe('MxCounterTypeFormComponent', () => {
  let component: MxCounterTypeFormComponent;
  let fixture: ComponentFixture<MxCounterTypeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MxCounterTypeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MxCounterTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
