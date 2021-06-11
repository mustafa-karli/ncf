import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSchemaFormComponent } from './account-schema-form.component';

describe('AccountSchemaFormComponent', () => {
  let component: AccountSchemaFormComponent;
  let fixture: ComponentFixture<AccountSchemaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSchemaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSchemaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
