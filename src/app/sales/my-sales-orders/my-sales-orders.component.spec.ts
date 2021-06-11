import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySalesOrdersComponent } from './my-sales-orders.component';

describe('MySalesOrdersComponent', () => {
  let component: MySalesOrdersComponent;
  let fixture: ComponentFixture<MySalesOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySalesOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MySalesOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
