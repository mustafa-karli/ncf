import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableViewScenariosComponent } from './table-view-scenarios.component';

describe('TableViewScenariosComponent', () => {
  let component: TableViewScenariosComponent;
  let fixture: ComponentFixture<TableViewScenariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableViewScenariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableViewScenariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
