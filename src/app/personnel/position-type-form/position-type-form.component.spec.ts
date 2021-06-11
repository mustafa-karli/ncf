import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionTypeFormComponent } from './position-type-form.component';

describe('PositionTypeFormComponent', () => {
  let component: PositionTypeFormComponent;
  let fixture: ComponentFixture<PositionTypeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositionTypeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
