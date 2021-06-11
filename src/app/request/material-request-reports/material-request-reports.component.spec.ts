import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialRequestReportsComponent } from './material-request-reports.component';

describe('MaterialRequestReportsComponent', () => {
  let component: MaterialRequestReportsComponent;
  let fixture: ComponentFixture<MaterialRequestReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialRequestReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialRequestReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
