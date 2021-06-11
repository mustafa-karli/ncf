import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCompanyFormComponent } from './my-company-form.component';

describe('MyCompanyFormComponent', () => {
  let component: MyCompanyFormComponent;
  let fixture: ComponentFixture<MyCompanyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCompanyFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCompanyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
