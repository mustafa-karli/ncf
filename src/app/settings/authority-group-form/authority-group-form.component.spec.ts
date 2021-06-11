import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorityGroupFormComponent } from './authority-group-form.component';

describe('AuthorityGroupFormComponent', () => {
  let component: AuthorityGroupFormComponent;
  let fixture: ComponentFixture<AuthorityGroupFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorityGroupFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorityGroupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
