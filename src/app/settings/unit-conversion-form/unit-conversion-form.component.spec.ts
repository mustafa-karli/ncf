import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitConversionFormComponent } from './unit-conversion-form.component';

describe('UnitConversionFormComponent', () => {
  let component: UnitConversionFormComponent;
  let fixture: ComponentFixture<UnitConversionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitConversionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitConversionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
