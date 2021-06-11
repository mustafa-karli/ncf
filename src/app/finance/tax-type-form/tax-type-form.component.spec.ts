import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxTypeFormComponent } from './tax-type-form.component';

describe('TaxTypeFormComponent', () => {
  let component: TaxTypeFormComponent;
  let fixture: ComponentFixture<TaxTypeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxTypeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
