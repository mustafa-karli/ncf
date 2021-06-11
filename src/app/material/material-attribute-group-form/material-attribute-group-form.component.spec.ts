import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialAttributeGroupFormComponent } from './material-attribute-group-form.component';

describe('MaterialAttributeGroupFormComponent', () => {
  let component: MaterialAttributeGroupFormComponent;
  let fixture: ComponentFixture<MaterialAttributeGroupFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialAttributeGroupFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialAttributeGroupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
