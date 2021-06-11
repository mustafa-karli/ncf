import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySalesOrderFormComponent } from './my-sales-order-form.component';

describe('MySalesOrderFormComponent', () => {
  let component: MySalesOrderFormComponent;
  let fixture: ComponentFixture<MySalesOrderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySalesOrderFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MySalesOrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
