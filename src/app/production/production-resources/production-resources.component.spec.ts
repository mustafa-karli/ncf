import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionResourcesComponent } from './production-resources.component';

describe('ProductionResourcesComponent', () => {
  let component: ProductionResourcesComponent;
  let fixture: ComponentFixture<ProductionResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductionResourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
