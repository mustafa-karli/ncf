import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableControllerStaticsComponent } from './table-controller-statics.component';

describe('TableControllerStaticsComponent', () => {
  let component: TableControllerStaticsComponent;
  let fixture: ComponentFixture<TableControllerStaticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableControllerStaticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableControllerStaticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
