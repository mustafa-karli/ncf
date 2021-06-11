import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialRequestByDefineFormComponent } from './material-request-by-define-form.component';

describe('MaterialRequestByDefineFormComponent', () => {
  let component: MaterialRequestByDefineFormComponent;
  let fixture: ComponentFixture<MaterialRequestByDefineFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialRequestByDefineFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialRequestByDefineFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
