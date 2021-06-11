import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialRequestFormComponent } from './material-request-form.component';

describe('MaterialRequestFormComponent', () => {
  let component: MaterialRequestFormComponent;
  let fixture: ComponentFixture<MaterialRequestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialRequestFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
