import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSchemasComponent } from './account-schemas.component';

describe('AccountSchemasComponent', () => {
  let component: AccountSchemasComponent;
  let fixture: ComponentFixture<AccountSchemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSchemasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSchemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
