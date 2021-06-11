import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialAttributeGroupsComponent } from './material-attribute-groups.component';

describe('MaterialAttributeGroupsComponent', () => {
  let component: MaterialAttributeGroupsComponent;
  let fixture: ComponentFixture<MaterialAttributeGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialAttributeGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialAttributeGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
