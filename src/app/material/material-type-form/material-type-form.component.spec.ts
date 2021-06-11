import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialTypeFormComponent } from './material-type-form.component';

describe('MaterialTypeFormComponent', () => {
  let component: MaterialTypeFormComponent;
  let fixture: ComponentFixture<MaterialTypeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialTypeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
