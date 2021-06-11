import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionResourceFormComponent } from './production-resource-form.component';

describe('ProductionResourceFormComponent', () => {
  let component: ProductionResourceFormComponent;
  let fixture: ComponentFixture<ProductionResourceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductionResourceFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionResourceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
