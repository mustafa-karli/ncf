import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorityGroupsComponent } from './authority-groups.component';

describe('AuthorityGroupsComponent', () => {
  let component: AuthorityGroupsComponent;
  let fixture: ComponentFixture<AuthorityGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorityGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorityGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
