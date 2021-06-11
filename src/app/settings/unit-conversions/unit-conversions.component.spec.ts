import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitConversionsComponent } from './unit-conversions.component';

describe('UnitConversionsComponent', () => {
  let component: UnitConversionsComponent;
  let fixture: ComponentFixture<UnitConversionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitConversionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitConversionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
