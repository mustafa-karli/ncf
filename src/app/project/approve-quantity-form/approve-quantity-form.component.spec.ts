import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveQuantityFormComponent } from './approve-quantity-form.component';

describe('ApproveQuantityFormComponent', () => {
  let component: ApproveQuantityFormComponent;
  let fixture: ComponentFixture<ApproveQuantityFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveQuantityFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveQuantityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
