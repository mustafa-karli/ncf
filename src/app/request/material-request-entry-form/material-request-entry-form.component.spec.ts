import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialRequestEntryFormComponent } from './material-request-entry-form.component';

describe('MaterialRequestEntryFormComponent', () => {
  let component: MaterialRequestEntryFormComponent;
  let fixture: ComponentFixture<MaterialRequestEntryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialRequestEntryFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialRequestEntryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
