import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTransactionTemplateFormComponent } from './account-transaction-template-form.component';

describe('AccountTransactionTemplateFormComponent', () => {
  let component: AccountTransactionTemplateFormComponent;
  let fixture: ComponentFixture<AccountTransactionTemplateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountTransactionTemplateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountTransactionTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
