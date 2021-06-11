import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableControllerStaticFormComponent } from './table-controller-static-form.component';

describe('TableControllerStaticFormComponent', () => {
  let component: TableControllerStaticFormComponent;
  let fixture: ComponentFixture<TableControllerStaticFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableControllerStaticFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableControllerStaticFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
