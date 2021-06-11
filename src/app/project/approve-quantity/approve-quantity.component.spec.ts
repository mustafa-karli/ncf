import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveQuantityComponent } from './approve-quantity.component';

describe('ApproveQuantityComponent', () => {
  let component: ApproveQuantityComponent;
  let fixture: ComponentFixture<ApproveQuantityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveQuantityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
