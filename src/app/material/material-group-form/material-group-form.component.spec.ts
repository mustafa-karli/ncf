import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialGroupFormComponent } from './material-group-form.component';

describe('MaterialGroupFormComponent', () => {
  let component: MaterialGroupFormComponent;
  let fixture: ComponentFixture<MaterialGroupFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialGroupFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialGroupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
