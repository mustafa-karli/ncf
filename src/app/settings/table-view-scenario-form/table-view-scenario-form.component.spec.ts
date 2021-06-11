import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableViewScenarioFormComponent } from './table-view-scenario-form.component';

describe('TableViewScenarioFormComponent', () => {
  let component: TableViewScenarioFormComponent;
  let fixture: ComponentFixture<TableViewScenarioFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableViewScenarioFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableViewScenarioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
