import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialGroupsComponent } from './material-groups.component';

describe('MaterialGroupsComponent', () => {
  let component: MaterialGroupsComponent;
  let fixture: ComponentFixture<MaterialGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
