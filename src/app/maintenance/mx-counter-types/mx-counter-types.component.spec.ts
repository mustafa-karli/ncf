import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MxCounterTypesComponent } from './mx-counter-types.component';

describe('MxCounterTypesComponent', () => {
  let component: MxCounterTypesComponent;
  let fixture: ComponentFixture<MxCounterTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MxCounterTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MxCounterTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
