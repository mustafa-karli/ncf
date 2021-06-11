import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesCartFormComponent } from './sales-cart-form.component';

describe('SalesCartFormComponent', () => {
  let component: SalesCartFormComponent;
  let fixture: ComponentFixture<SalesCartFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesCartFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesCartFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
