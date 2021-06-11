import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialRequestEntryComponent } from './material-request-entry.component';

describe('MaterialRequestEntryComponent', () => {
  let component: MaterialRequestEntryComponent;
  let fixture: ComponentFixture<MaterialRequestEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialRequestEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialRequestEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
